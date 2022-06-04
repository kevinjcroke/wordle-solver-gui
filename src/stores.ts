import type { Letter } from "./word/Letter";
import { LetterState } from "./word/Letter";
import { writable, derived } from 'svelte/store';
import solver from './solver/findPossibleWords'


function createGameState() {
    let initialWords: Letter[] = [];

    const { subscribe, set, update } = writable(initialWords);

    function addLetter(letter: string) {
        let newLetter: Letter = { state: LetterState.Empty, letter: letter.toUpperCase() };
        update(l => [...l, newLetter]);
    }

    const backSpace = () => update(l => l.length === 0 ? l : l.slice(0, l.length - 1));

    const reset = () => set([...initialWords]);

    function useSuggestion(word: string) {
        // turn the word into an array of letters
        let newWord = word?.split("").map(item => ({ state: LetterState.Tbd, letter: item })) ?? [];

        update(l => {
            let currentWord = Math.floor((l.length + 1) / 5);
            let startOfCurrentWord = currentWord * 5;
            return [...l.slice(0, startOfCurrentWord), ...newWord];
        });
    }

    // Sets the state (correct, missing, etc) for a specific letter
    function defineLetterState(wordIndex: number, letterIndex: number, letterState: LetterState) {
        let index = wordIndex * 5 + letterIndex;
        update(l => {
            let newLetter: Letter = {
                state: letterState,
                letter: l[index].letter
            };
            const newState = [
                ...l.slice(0, index),
                newLetter,
                ...l.slice(index + 1)
            ];

            return newState;
        });
    }

    return {
        subscribe,
        addLetter,
        backSpace,
        reset,
        useSuggestion,
        defineLetterState
    }
}

function makeBoard(letters: Letter[]): Letter[][] {
    const wordSize = 5;
    let board: Letter[][] = [];
    for (let i = 0; i < letters.length; i += wordSize) {
        const chunk = letters.slice(i, i + wordSize);
        board.push(chunk);
    }
    return board;
}

export const letters = createGameState();
export const board = derived(letters, $words => makeBoard($words));
export const possibilities = derived(board, $board => solver($board));