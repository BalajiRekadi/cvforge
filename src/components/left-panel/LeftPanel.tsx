import { Flex } from "@mantine/core";
import { ActionCard, CVCard } from "../../shared/components";
import classes from "./left-panel.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../middle-panel/preview/Document";

const LeftPanel = () => {
  return (
    <div className={classes["left-panel"]}>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <ActionCard />
        <CVCard />
      </Flex>
      <div className="App">
        <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
          Download
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default LeftPanel;
