import {configureStore} from "@reduxjs/toolkit";
import recordsReducer from './reducers/recordsSlice'
import winReducer from './reducers/winSlice'

export const store = configureStore({
    reducer: {
        records: recordsReducer,
        win: winReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch