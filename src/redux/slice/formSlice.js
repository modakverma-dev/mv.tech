import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAuthForm: false,
};

const formSlice = createSlice({
  name: "formSlice",
  initialState: initialState,
  reducers: {
    setAuthForm: (state, action) => {
      state.showAuthForm = action.payload;
    },
  },
});

export default formSlice.reducer;

export const { setAuthForm } = formSlice.actions;
