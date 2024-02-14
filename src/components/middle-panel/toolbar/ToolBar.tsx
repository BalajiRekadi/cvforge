import { ActionIcon, rem } from "@mantine/core";
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
          size="xl"
          aria-label="Horizontal"
          radius={RADIUS}
        >
          <IconZoomReset style={{ width: rem(23) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="xl"
          aria-label="Vertical"
          radius={RADIUS}
        >
          <PDFDownloadLink
            className="download-link"
            document={<MyDocument resume={resume} />}
            fileName="somename.pdf"
          >
            <IconFileTypePdf style={{ width: rem(23) }} stroke={1.5} />
          </PDFDownloadLink>
        </ActionIcon>
      </ActionIcon.Group>
    </div>
  );
};

export default ToolBar;
