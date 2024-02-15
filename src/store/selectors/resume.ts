import { Resume } from "../../shared/types";
import { AppState } from "../store";

//TODO: Can we derieve state using selectors
const selectSelectedResume = ({
  resume: { list, selectedResumeId },
}: AppState): Resume => {
  const resume = list.filter((item: any) => item.id === selectedResumeId);
  if (resume.length) return resume[0];
  return list[0];
};

const selectResumesIDAndNameMap = ({ resume: { list } }): any => {
  const nameAndIDList = {};
  list.forEach((resume) => {
    nameAndIDList[resume.id] = resume.name;
  });
  return nameAndIDList;
};

const selectFontSize = ({ resume: { fontSize } }) => {
  return fontSize;
};

const selectResumeTheme = ({ resume: { resumeTheme } }) => {
  return resumeTheme;
};

export {
  selectSelectedResume,
  selectResumesIDAndNameMap,
  selectFontSize,
  selectResumeTheme,
};
