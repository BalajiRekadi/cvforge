import { Resume } from "../../shared/types";

const _updateDefaultBlockField = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock[action.payload.field] = action.payload.value;
  }
};

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

const _addNewSection = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.formBlocks[action.payload.id] = action.payload;
  }
};

export { _updateDefaultBlockField, _updateBlockField, _addNewSection };
