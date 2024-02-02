import { Reducer, createSlice } from "@reduxjs/toolkit";
import { Resume } from "../../shared/types";

interface ResumeState {
  list: Resume[];
  selectedResumeId: string;
}

const initialState: ResumeState = {
  list: [
    {
      id: "001",
      defaultFormBlock: {
        id: "defaultformblock001",
        title: "Identity",
        fullName: "Balaji Rekadi",
        designation: "Senior Software Engineer",
        linkedIn: "balaji.rekadi@linkedin.com",
        github: "github.com/balajirekadi",
        mail: "balaji.rekadi@gmail.com",
        phone: "+91 9550111826",
        about: "Neno peddha thopu",
      },
      // formBlocks: [
      //   {
      //     id: "formblock001",
      //     title: "Education",
      //     subTitle: "MNR High School",
      //     summary: "2013",
      //   },
      //   {
      //     id: "formblock002",
      //     title: "Experience",
      //     subTitle: "M3BI, A zensar company",
      //     summary: "2021 - present",
      //   },
      // ],
    },
  ],
  selectedResumeId: "001",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addReducer: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
    deleteReducer: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

const resumeReducer: Reducer<ResumeState> = resumeSlice.reducer;

// Action creators are generated for each case reducer function
export const { addReducer, deleteReducer } = resumeSlice.actions;

export default resumeReducer;

export type { ResumeState };