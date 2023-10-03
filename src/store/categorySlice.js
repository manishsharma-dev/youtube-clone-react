import { createSlice } from "@reduxjs/toolkit";
const INITIAL_CATEGORY = {
  typeId: 1,
  name: "Home",
  channel: "",
};
const categorySlice = createSlice({
  name: "category",
  initialState: INITIAL_CATEGORY,
  reducers: {
    setCategory(state, action) {
      state.typeId = action.payload.typeId;
      state.name = action.payload.name;
      state.channel = action.payload.channel;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
