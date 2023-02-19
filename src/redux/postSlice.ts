import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../interface";
import { RootState } from "./store";
import produce from "immer";

const initialState: IPost = {
  title: "",
  content: "",
  image: "",
  id: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    onEditPost: (state, action: PayloadAction<IPost>) => {
      return produce(state, (draftState) => {
        Object.assign(draftState, { ...action.payload });
      });
    },
  },
});

export const { onEditPost } = postSlice.actions;
export const post = (state: RootState) => state;

export default postSlice.reducer;
