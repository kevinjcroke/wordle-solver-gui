import type { Letter } from "./word/Letter";
import { LetterState } from "./word/Letter";
import { writable, derived } from 'svelte/store';
import solver from './solver/findPossibleWords'
import { tick } from "svelte";


function createGameState() {
    let initialWords: Letter[][] = [[]];
    let currentState: Letter[][];
    let localCurrentWord = 0;

    const { subscribe, set, update } = writable([...initialWords]);
    subscribe(s => currentState = s); // I don't like this. There's gotta be a better way

    const currentWord = writable(localCurrentWord);
    currentWord.subscribe(c => localCurrentWord = c);


    async function addLetter(letter: string) {
        let newLetter: Letter = { state: LetterState.Empty, letter: letter.toUpperCase() };
        if (isCurrentWordComplete()) {
            nextWord();
            await tick();
        }

        update(w => {
            return [...w.slice(0, localCurrentWord), [...w[localCurrentWord], newLetter]]
        });
    }

    function backSpace() {
        update(w => {
            if (w[localCurrentWord].length === 0) {
                currentWord.update(c => Math.max(0, c - 1));
            }

            return [...w.slice(0, localCurrentWord), w[localCurrentWord].slice(0, w[localCurrentWord].length - 1)];
        })
    }

    function isCurrentWordComplete() {
        console.log(localCurrentWord);
        console.log(currentState[localCurrentWord]);
        console.log(currentState[localCurrentWord].length)
        return (currentState[localCurrentWord].length === 5);
    }

    function nextWord() {
        if (isCurrentWordComplete()) {
            currentWord.update(c => c + 1);
            update(w => [...w, []]);
        }
    }

    function reset() {
        currentWord.set(0);
        set([...initialWords]);
    }

    function useSuggestion(word: string) {
        let newWord = word?.split("").map(item => ({ state: LetterState.Tbd, letter: item })) ?? [];
        nextWord();
        update(w => [...w.slice(0, localCurrentWord), newWord]);
    }

    // Sets the state (correct, missing, etc) for a specific letter
    function defineLetterState(word: number, letter: number, letterState: LetterState) {
        update(w => {
            let newLetter: Letter = {
                state: letterState,
                letter: w[word][letter].letter
            };
            const newState = [
                ...w.slice(0, word),
                [
                    ...w[word].slice(0, letter),
                    newLetter,
                    ...w[word].slice(letter + 1)
                ],
                ...w.slice(word + 1)
            ];

            return newState;
        });
    }

    return {
        subscribe,
        addLetter,
        backSpace,
        nextWord,
        reset,
        useSuggestion,
        defineLetterState
    }
}

export const words = createGameState();
export const possibilities = derived(words, $words => solver($words));