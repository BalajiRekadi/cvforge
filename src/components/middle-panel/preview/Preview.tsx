import { forwardRef } from "react";
import classes from "./preview.module.css";
import { useSelector } from "react-redux";
import { getSelectedResume } from "../../../store/selectors/resume";
import { DefaultFormBlock, FormBlocks } from "../../../shared/types";
import templates from "../../../constants/templates";

const Preview = forwardRef((props: any, ref: any) => {
  const resume = useSelector(getSelectedResume);
  const defaultFormBlock: DefaultFormBlock = resume.defaultFormBlock;
  const formBlocks: FormBlocks = resume.formBlocks;
  const formBlocksKeys = Object.keys(formBlocks);

  const selectedTemplate = templates.defaultTemplate;

  return (
    <div ref={ref} className={classes["preview"]}>
      <div style={selectedTemplate.nameblock}>
        <div>{defaultFormBlock?.fullName}</div>
        <div style={selectedTemplate.designation}>
          {defaultFormBlock?.designation}
        </div>
      </div>
      <div style={selectedTemplate.details}>
        <div>{defaultFormBlock?.phone}</div>
        <div>{defaultFormBlock?.mail}</div>
        <div>{defaultFormBlock?.github}</div>
        <div>{defaultFormBlock?.linkedIn}</div>
      </div>
      <div style={selectedTemplate.aboutTitle}>Summary</div>
      <div style={selectedTemplate.about}>{defaultFormBlock?.about}</div>

      {formBlocksKeys.map((key) => (
        <div style={selectedTemplate.formBlocks}>
          <div style={selectedTemplate.aboutTitle}>{formBlocks[key].name}</div>
          {formBlocks[key].entries.map((entry) => (
            <>
              <div style={selectedTemplate.about}>{entry.title}</div>
              <div style={selectedTemplate.about}>{entry.subTitle}</div>
              <div style={selectedTemplate.about}>{entry.summary}</div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
});

export default Preview;
