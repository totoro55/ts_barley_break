import {IRank} from "../../types/IRank";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface recordsState {
    ranks: IRank[]
    isSaveLocal: boolean
    lastRecord:IRank | null
}

const initialState: recordsState = {
    ranks: [
        {date: {year:1900, month:0, day:0}, moves: Number.POSITIVE_INFINITY},
        {date: {year:1900, month:0, day:0}, moves: Number.POSITIVE_INFINITY},
        {date: {year:1900, month:0, day:0}, moves: Number.POSITIVE_INFINITY},
        {date: {year:1900, month:0, day:0}, moves: Number.POSITIVE_INFINITY},
        {date: {year:1900, month:0, day:0}, moves: Number.POSITIVE_INFINITY},
    ],
    isSaveLocal: false,
    lastRecord: null
}

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        addAllRecords: (state, action: PayloadAction<IRank[]>) => {
            state.ranks = action.payload
        },
        addNewRecord: (state, action: PayloadAction<IRank>) => {
            state.ranks = [action.payload, ...state.ranks].slice(0, 5)
        },
        setIsSaveLocal: (state, action: PayloadAction<boolean>) => {
            state.isSaveLocal = action.payload
        },
        setLastRecord: (state, action: PayloadAction<IRank | null>) => {
            state.lastRecord = action.payload
        },
    }
})

export const {
    addAllRecords,
    addNewRecord,
    setIsSaveLocal,
    setLastRecord
} = recordsSlice.actions

export default recordsSlice.reducer