// store.js
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer, { ResumeState } from "./reducers/resume";

interface AppState {
  resume: ResumeState;
}

const store = configureStore<AppState>({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;

export type { AppState };
