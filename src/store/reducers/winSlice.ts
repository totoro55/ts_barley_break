import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface winState {
    isWin: boolean
}

const initialState:winState = {
    isWin:false
}

export const winSlice = createSlice({
    name:'win',
    initialState,
    reducers: {
        setIsWin: (state, action:PayloadAction<boolean>)=>{
            state.isWin = action.payload
        }
    }
})

export const {setIsWin} = winSlice.actions

export default winSlice.reducer