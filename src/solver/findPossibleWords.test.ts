import { jest } from "@jest/globals"
jest.mock("./wordleDictionary");

import { Letter, LetterState } from "../word/Letter";

import findPossibleWords from "./findPossibleWords";
import dictionary from "./wordleDictionary";

const mock = jest.spyOn(dictionary, 'getDictionary');

test('All Words Returned when no guesses', () => {

    mock.mockReturnValue(["abcde", "efghi"]);

    const initialState: Letter[][] = [[]];
    var result = findPossibleWords(initialState);
    expect(["abcde", "efghi"]).toEqual(result);
})

test('Only Words that contain correct letter are returned', () => {
    mock.mockReturnValue(["abcde", "efghi"]);

    var result = findPossibleWords([[{ letter: "a", state: LetterState.Correct }]]);
    expect(["abcde"]).toEqual(result);
})

test('Only Words that contain present letter are returned', () => {
    mock.mockReturnValue(["abcde", "bfghi"]);

    var result = findPossibleWords([[{ letter: "b", state: LetterState.Present }]]);
    expect(["abcde"]).toEqual(result);
})

test('Only words that do not contain absent letters are returned', () => {
    mock.mockReturnValue(["abcde", "efghi"]);

    var result = findPossibleWords([[{ letter: "a", state: LetterState.Absent }]]);
    expect(["efghi"]).toEqual(result);
})

test('Return word who has a letter that is both absent and still in the same place', () => {
    mock.mockReturnValue(["abcda", "efghi"]);

    var result = findPossibleWords([[{ letter: "a", state: LetterState.Correct }, { letter: "a", state: LetterState.Absent }]]);
    expect(["abcda"]).toEqual(result);
})

