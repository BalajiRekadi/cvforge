import { ActionIcon, Paper, rem } from "@mantine/core";
import { IconFileTypePdf } from "@tabler/icons-react";
import { IconZoomReset } from "@tabler/icons-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "./toolbar.css";
import MyDocument from "../document/Document";

const ToolBar = () => {
  return (
    <div className="toolbar">
      <Paper shadow="xl" radius="xl" withBorder p="xl">
        <ActionIcon.Group>
          <ActionIcon variant="default" size="md" aria-label="Horizontal">
            <IconZoomReset style={{ width: rem(15) }} stroke={1.5} />
          </ActionIcon>
          <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
            <ActionIcon variant="default" size="md" aria-label="Vertical">
              <IconFileTypePdf style={{ width: rem(15) }} stroke={1.5} />
            </ActionIcon>
          </PDFDownloadLink>
        </ActionIcon.Group>
      </Paper>
    </div>
  );
};

export default ToolBar;
