import { Reducer, createSlice } from "@reduxjs/toolkit";
import { Resume } from "../../shared/types";
import {
  _updateDefaultBlockField,
  _updateBlockField,
  _addNewSection,
} from "../actions/resume";

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
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      formBlocks: {
        formblock001: {
          id: "formblock001",
          name: "Education",
          entries: [
            {
              id: "entry001",
              title: "MNR High School",
              subTitle: "2011",
              subTitle2: "89%",
              summary: "",
            },
            {
              id: "entry002",
              title: "Gayatri Jr College",
              subTitle: "2011 - 2013",
              subTitle2: "94%",
              summary: "",
            },
          ],
        },
        formblock002: {
          id: "formblock002",
          name: "Experience",
          entries: [
            {
              id: "entry003",
              title: "M3BI, A zensar company",
              subTitle: "Senior Software Developer",
              subTitle2: "2021 - present",
              summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              id: "entry004",
              title: "Hexagon Capability Center India",
              subTitle: "Software Developer",
              subTitle2: "2017 - 2021",
              summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ],
        },
      },
    },
  ],
  selectedResumeId: "001",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateDefaultBlockField: _updateDefaultBlockField,
    updateBlockField: _updateBlockField,
    addNewSection: _addNewSection,
  },
});

const resumeReducer: Reducer<ResumeState> = resumeSlice.reducer;

// Action creators are generated for each case reducer function
export const { updateDefaultBlockField, updateBlockField, addNewSection } =
  resumeSlice.actions;

export default resumeReducer;

export type { ResumeState };
