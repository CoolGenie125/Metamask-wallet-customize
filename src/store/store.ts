import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index";
import nftassetsReducer from "./nft/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nftassets: nftassetsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
