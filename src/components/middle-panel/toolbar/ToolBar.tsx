import { ActionIcon, Tooltip, rem } from "@mantine/core";
import { IconFileTypePdf } from "@tabler/icons-react";
import { IconZoomReset } from "@tabler/icons-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import classes from "./toolbar.module.css";
import CVDocument from "../cv-document/CVDocument";
import { useSelector } from "react-redux";
import {
  selectFontSize,
  selectResumeTheme,
  selectSelectedResume,
} from "../../../store/selectors/resume";
import { RADIUS } from "../../../constants";

const ToolBar = () => {
  const resume = useSelector(selectSelectedResume);
  const fontSize = useSelector(selectFontSize);
  const themeColor = useSelector(selectResumeTheme);

  return (
    <div className={classes["toolbar"]}>
      <ActionIcon.Group>
        <ActionIcon
          variant="default"
          size="lg"
          aria-label="Horizontal"
          radius={RADIUS}
        >
          <Tooltip label="Reset zoom" openDelay={1000} color="dark.8">
            <IconZoomReset style={{ width: rem(20) }} stroke={1.5} />
          </Tooltip>
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="lg"
          aria-label="Vertical"
          radius={RADIUS}
        >
          <PDFDownloadLink
            className={classes["download-link"]}
            document={
              <CVDocument
                resume={resume}
                fontSize={fontSize}
                themeColor={themeColor}
              />
            }
            fileName="somename.pdf"
          >
            <Tooltip label="Download PDF" openDelay={1000} color="dark.8">
              <IconFileTypePdf style={{ width: rem(20) }} stroke={1.5} />
            </Tooltip>
          </PDFDownloadLink>
        </ActionIcon>
      </ActionIcon.Group>
    </div>
  );
};

export default ToolBar;
