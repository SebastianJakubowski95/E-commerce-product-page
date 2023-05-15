import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuIsOpen: false,
  imagePreviewIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeMenuModal(state) {
      state.menuIsOpen = false;
    },
    openMenuModal(state) {
      state.menuIsOpen = true;
    },
    toggleMenuModal(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },

    closeImagesModal(state) {
      state.imagePreviewIsOpen = false;
    },
    openImagesModal(state) {
      state.imagePreviewIsOpen = true;
    },
    toggleImagesModal(state) {
      state.imagePreviewIsOpen = !state.imagePreviewIsOpen;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
