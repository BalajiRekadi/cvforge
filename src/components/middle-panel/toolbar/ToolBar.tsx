import { ActionIcon, Tooltip, rem } from "@mantine/core";
import { IconFileTypePdf } from "@tabler/icons-react";
import { IconZoomReset } from "@tabler/icons-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "./toolbar.css";
import MyDocument from "../document/Document";
import { useSelector } from "react-redux";
import { getSelectedResume } from "../../../store/selectors/resume";
import { RADIUS } from "../../../constants";

const ToolBar = () => {
  const resume = useSelector(getSelectedResume);

  return (
    <div className="toolbar">
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
            className="download-link"
            document={<MyDocument resume={resume} />}
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
