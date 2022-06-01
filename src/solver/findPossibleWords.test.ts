const mockWordle = jest.mock("./wordleDictionary");

import type { Letter } from "../word/Letter";
import findPossibleWords from "./findPossibleWords";
const wordleDictionary = require("./wordleDictionary");

test('All Words Returned when no guesses', () => {
    jest.mock("./wordleDictionary", () => ({ default: ["abcde"] }));
    //wordleDictionary.mockReturnValue(["abcde"]);

    const initialState: Letter[][] = [[]];
    var result = findPossibleWords(initialState);
    expect(["abcde"]).toEqual(result);
})