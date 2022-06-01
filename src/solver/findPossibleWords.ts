import allWords from "./wordleDictionary";
import type { Letter } from "../word/Letter"
import { LetterState } from "../word/Letter";

export default function (guessedWords: Letter[][]) {

    var result = allWords.filter(dictionaryWord => {
        return guessedWords.length === 0 ?
            true :
            guessedWords.every(guessedWord => IsValidWordTest(dictionaryWord, guessedWord));
    });
    return result;
}

function IsValidWordTest(dictionaryWord: string, guessedWord: Letter[]) {
    var dictionaryWordArray = dictionaryWord.split("");
    for (let x = 0; x < 5; x++) {
        if (guessedWord.length <= x) {
            return true;
        }
        if (guessedWord[x].state === LetterState.Correct && dictionaryWordArray[x] != guessedWord[x].letter)
            return false;
        else if (guessedWord[x].state === LetterState.Absent) {
            if (guessedWord[x].letter === dictionaryWordArray[x] || // the word has a letter in a spot we know it isn't
                (!guessedWord.some(l => l.state === LetterState.Correct && l.letter == guessedWord[x].letter) && // the word has this letter in another spot, but it is ok
                    dictionaryWordArray.includes(guessedWord[x].letter))) // the word includes the letter
                return false;
        } else if (guessedWord[x].state === LetterState.Present) {
            if (guessedWord[x].letter == dictionaryWord[x] || !dictionaryWord.includes(guessedWord[x].letter))
                return false;
        }
    }
    return true;
}
