import { createSlice } from "@reduxjs/toolkit";
import { getNftAssets } from "./actions";
import { nftassets } from "./types";

const PREFIX = "nftassets";
const initialState: nftassets = {
  nftassets: null,
};

const setNftAssets = (state: nftassets, data: any) => {
  state.nftassets = data;
};

export const nftassetsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNftAssets.fulfilled.type,
      (state: nftassets, action: any) => {
        setNftAssets(state, action.payload);
      }
    );
  },
});

export { getNftAssets };
export default nftassetsReducer.reducer;
