import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setLight: (state) => {
      state.darkMode = false;
    },
    setDark: (state) => {
      state.darkMode = true;
    },
  },
});

// action creators generated for each reducer function
export const { setLight, setDark } = darkModeSlice.actions;

// selectors
export const selectDarkMode = (state: RootState) => state.darkMode.darkMode;

export default darkModeSlice.reducer;
