import { configureStore } from "@reduxjs/toolkit";
import { bgColor } from "./reducer/bgReducer";

const store = configureStore({
  // configureStore는 내부적으로 combineReducers를 호출합니다.
  reducer: {
    bgColor: bgColor.reducer,
  },
});

export default store;
