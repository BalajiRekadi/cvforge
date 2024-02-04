import { forwardRef } from "react";
import "./preview.css";
import { useSelector } from "react-redux";
import { getSelectedResume } from "../../../store/selectors/resume";
import { DefaultFormBlock } from "../../../shared/types";
import templates from "../../../constants/templates";

const Preview = forwardRef((props: any, ref: any) => {
  const resume = useSelector(getSelectedResume);
  const defaultFormBlock: DefaultFormBlock | undefined =
    resume?.defaultFormBlock;

  const selectedTemplate = templates.defaultTemplate;

  return (
    <div ref={ref} className="preview">
      <div style={selectedTemplate.name}>
        <div>{defaultFormBlock?.fullName}</div>
        <div>{defaultFormBlock?.designation}</div>
      </div>
      <div style={selectedTemplate.details}>
        <div>{defaultFormBlock?.phone}</div>
        <div>{defaultFormBlock?.mail}</div>
        <div>{defaultFormBlock?.github}</div>
        <div>{defaultFormBlock?.linkedIn}</div>
      </div>
      <div style={selectedTemplate.about}>{defaultFormBlock?.about}</div>
    </div>
  );
});

export default Preview;
