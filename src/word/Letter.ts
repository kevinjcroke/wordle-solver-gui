export enum LetterState {
    Empty = "empty",
    Tbd = "tbd",
    Absent = "absent",
    Present = "present",
    Correct = "correct"
}

export class Letter {
    public letter: string;
    public state: LetterState;
}