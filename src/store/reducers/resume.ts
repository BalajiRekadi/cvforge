import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    list: [
      {
        id: "001",
        defaultFormBlock: {
          id: "defaultformblock001",
          title: "Identity",
          name: "Balaji Rekadi",
          designation: "Senior Software Engineer",
          linkedIn: "balaji.rekadi@linkedin.com",
        },
        formBlocks: [
          {
            id: "formblock001",
            title: "Education",
            subTitle: "MNR High School",
            summary: "2013",
          },
          {
            id: "formblock002",
            title: "Experience",
            subTitle: "M3BI, A zensar company",
            summary: "2021 - present",
          },
        ],
      },
    ],
    selectedResume: "",
  },
  reducers: {
    addReducer: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
    deleteReducer: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

const resumeReducer = resumeSlice.reducer;

// Action creators are generated for each case reducer function
export const { addReducer, deleteReducer } = resumeSlice.actions;

export default resumeReducer;
