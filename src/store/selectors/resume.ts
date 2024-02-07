import { Resume } from "../../shared/types";
import { AppState } from "../store";

const getSelectedResume = ({
  resume: { list, selectedResumeId },
}: AppState): Resume => {
  const resume = list.filter((item: any) => item.id === selectedResumeId);
  if (resume.length) return resume[0];
  return list[0];
};

export { getSelectedResume };
