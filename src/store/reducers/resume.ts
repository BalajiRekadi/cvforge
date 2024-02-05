import { Reducer, createSlice } from "@reduxjs/toolkit";
import { Resume } from "../../shared/types";
import {
  _updateAbout,
  _updateDesignation,
  _updateGithub,
  _updateLinkedin,
  _updateMail,
  _updateName,
  _updatePhone,
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
          title: "Education",
          subTitle: "MNR High School",
          summary: "2013",
        },
        formblock002: {
          id: "formblock002",
          title: "Experience",
          subTitle: "M3BI, A zensar company",
          summary: "2021 - present",
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
    updateName: _updateName,
    updateDesignation: _updateDesignation,
    updatePhone: _updatePhone,
    updateMail: _updateMail,
    updateLinkedin: _updateLinkedin,
    updateGithub: _updateGithub,
    updateAbout: _updateAbout,
  },
});

const resumeReducer: Reducer<ResumeState> = resumeSlice.reducer;

// Action creators are generated for each case reducer function
export const {
  updateName,
  updateDesignation,
  updatePhone,
  updateMail,
  updateLinkedin,
  updateGithub,
  updateAbout,
} = resumeSlice.actions;

export default resumeReducer;

export type { ResumeState };
