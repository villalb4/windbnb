import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    adults: number;
    children: number;
}

const initialState: CounterState = {
    adults: 0,
    children: 0,
}

export const menuCounter = createSlice({
    name: 'menuCounter',
    initialState,
    reducers: {
        adultIncrement: (state) => {
            state.adults += 1;
        },
        adultDecrement: (state) => {
            state.adults -= 1;
        },
        chilIncrement: (state) => {
            state.children += 1;
        },
        chilDecrement: (state) => {
            state.children -= 1;
        }
    }
})

export const {adultIncrement, adultDecrement, chilIncrement, chilDecrement} = menuCounter.actions;
export default menuCounter.reducer;