import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      formSlice: formSlice,
    },
  });
};
