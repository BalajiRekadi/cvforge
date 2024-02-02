// store.js
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./reducers/resume";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;
