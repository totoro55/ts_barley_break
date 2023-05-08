import {IRank} from "../types/IRank";

export const newRecord = (moves: number): IRank => {
    return {
        date: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: new Date().getDate(),
        },
        moves: moves
    }
}