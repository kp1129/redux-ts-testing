import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

// action creators generated for each reducer function
export const { increment, decrement } = counterSlice.actions;

// selectors
export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
