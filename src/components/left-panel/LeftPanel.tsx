import { Flex } from "@mantine/core";
import { CVCard } from "../../shared/components";
import "./left-panel.css";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <CVCard />
        <CVCard />
        <CVCard />
      </Flex>
    </div>
  );
};

export default LeftPanel;
