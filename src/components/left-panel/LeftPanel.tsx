import { Flex } from "@mantine/core";
import { ActionCard, CVCard } from "../../shared/components";
import classes from "./left-panel.module.css";

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
    </div>
  );
};

export default LeftPanel;
