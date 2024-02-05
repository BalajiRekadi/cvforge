import { Resume } from "../../shared/types";

const _updateName = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.fullName = action.payload;
  }
};

const _updateDesignation = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.designation = action.payload;
  }
};

const _updatePhone = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.phone = action.payload;
  }
};
const _updateMail = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.mail = action.payload;
  }
};
const _updateLinkedin = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.linkedIn = action.payload;
  }
};
const _updateGithub = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.github = action.payload;
  }
};
const _updateAbout = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.defaultFormBlock.about = action.payload;
  }
};

export {
  _updateName,
  _updateDesignation,
  _updatePhone,
  _updateMail,
  _updateLinkedin,
  _updateGithub,
  _updateAbout,
};
