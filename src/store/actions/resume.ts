import { Resume } from "../../shared/types";
import { v4 as uuidv4 } from "uuid";

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
    const id = uuidv4();

    resume.formBlocks[action.payload.id] = {
      id,
      name: action.payload,
      entries: [
        {
          id: uuidv4(),
          title: "",
          subTitle: "",
          subTitle2: "",
          summary: "",
        },
      ],
    };
  }
};

const _deleteFormBlock = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    delete resume.formBlocks[action.payload];
  }
};

const _updateFormBlockName = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.formBlocks[action.payload.id].name = action.payload.name;
  }
};

const _updateFontSize = (state, action) => {
  state.fontSize = action.payload;
};

const _updateResumeTheme = (state, action) => {
  state.resumeTheme = action.payload;
};

const _addEntry = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    resume.formBlocks[action.payload].entries.push({
      id: uuidv4(),
      title: "",
      subTitle: "",
      subTitle2: "",
      summary: "",
    });
  }
};

const _deleteEntry = (state, action) => {
  const resume: Resume = state.list.find(
    (item) => item.id === state.selectedResumeId
  );
  if (resume) {
    const index = resume.formBlocks[action.payload.sectionId].entries.findIndex(
      (item) => item.id === action.payload.entryId
    );
    resume.formBlocks[action.payload.sectionId].entries.splice(index, 1);
  }
};

export {
  _updateDefaultBlockField,
  _updateBlockField,
  _addNewSection,
  _updateFormBlockName,
  _deleteFormBlock,
  _updateFontSize,
  _updateResumeTheme,
  _addEntry,
  _deleteEntry,
};
