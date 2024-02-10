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
    <div ref={ref} className={classes["preview"]} style={selectedTemplate.page}>
      <div style={selectedTemplate.nameblock}>
        <div style={selectedTemplate.fullName}>
          {defaultFormBlock?.fullName}
        </div>
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
          <div style={selectedTemplate.formBlockTitle}>
            {formBlocks[key].name}
          </div>
          <div style={selectedTemplate.entries}>
            {formBlocks[key].entries.map((entry) => (
              <div style={selectedTemplate.entry}>
                <div
                  style={{
                    ...selectedTemplate.entryItem,
                    ...selectedTemplate.entryTitle,
                  }}
                >
                  {entry.title}
                </div>
                <div
                  style={{
                    ...selectedTemplate.entryItem,
                    ...selectedTemplate.entrySubTitle,
                  }}
                >
                  {entry.subTitle}
                </div>
                <div
                  style={{
                    ...selectedTemplate.entryItem,
                    ...selectedTemplate.entrySubTitle2,
                  }}
                >
                  {entry.subTitle2}
                </div>
                <div
                  style={{
                    ...selectedTemplate.entryItem,
                    ...selectedTemplate.summary,
                  }}
                >
                  {entry.summary}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default Preview;
