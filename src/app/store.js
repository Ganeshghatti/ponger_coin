import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/User";
import { loadingSlice } from "../features/Loader";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loading:loadingSlice.reducer
  },
});
