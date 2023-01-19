import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlide = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchParamsSlide.actions;
export default searchParamsSlide.reducer;
