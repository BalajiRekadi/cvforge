import { Resume } from "../../shared/types";

// Identity block actions
const _updateDefaultBlockField = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock[action.payload.field] = action.payload.value;
  }
};

// Section block actions
const _updateBlockField = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    const entry = resume.formBlocks[action.payload.sectionId].entries.find(
      (item) => item.id === action.payload.id
    );
    if (entry) {
      entry[action.payload.field] = action.payload.value;
    }
  }
};

export { _updateDefaultBlockField, _updateBlockField };
