import { forwardRef } from "react";
import classes from "./preview.module.css";
import { useSelector } from "react-redux";
import {
  selectFontSize,
  selectResumeTheme,
  selectSelectedResume,
} from "../../../store/selectors/resume";
import { DefaultFormBlock, FormBlocks } from "../../../shared/types";
import getDefaultTemplate from "../../../constants/templates";

const Preview = forwardRef((props: any, ref: any) => {
  const resume = useSelector(selectSelectedResume);
  // TODO: q1
  const fontSize = useSelector(selectFontSize);
  const themeColor = useSelector(selectResumeTheme);

  const defaultFormBlock: DefaultFormBlock = resume.defaultFormBlock;
  const formBlocks: FormBlocks = resume.formBlocks;
  const formBlocksKeys = Object.keys(formBlocks);

  const selectedTemplate = getDefaultTemplate(fontSize, themeColor);

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
        <div style={selectedTemplate.detailsItem}>{defaultFormBlock?.mail}</div>
        <div style={selectedTemplate.detailsItem}>
          {defaultFormBlock?.phone}
        </div>
        <div style={selectedTemplate.detailsItem}>
          {defaultFormBlock?.github}
        </div>
        <div style={selectedTemplate.detailsItem}>
          {defaultFormBlock?.linkedIn}
        </div>
      </div>
      <div style={selectedTemplate.aboutTitle}>Summary</div>
      <div style={selectedTemplate.about}>{defaultFormBlock?.about}</div>

      {formBlocksKeys.map((key) => (
        <div style={selectedTemplate.formBlocks}>
          <div style={selectedTemplate.formBlockTitle}>
            {formBlocks[key].name}
          </div>
          <div>
            {formBlocks[key].entries.map((entry) => (
              <div style={selectedTemplate.entry}>
                <div style={selectedTemplate.entryTitle}>{entry.title}</div>
                <div style={selectedTemplate.entrySubTitle}>
                  {entry.subTitle}
                </div>
                <div style={selectedTemplate.entrySubTitle2}>
                  {entry.subTitle2}
                </div>
                <div style={selectedTemplate.summary}>{entry.summary}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default Preview;
