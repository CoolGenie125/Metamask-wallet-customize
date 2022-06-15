import { createAsyncThunk } from "@reduxjs/toolkit";
import { assetsRequest } from "../api/nft";

export const getNftAssets = createAsyncThunk(
  "nfts/getNfts",
  async (params: any) => {
    try {
      const res = await assetsRequest(params);
      return res;
    } catch (err: any) {}
  }
);
