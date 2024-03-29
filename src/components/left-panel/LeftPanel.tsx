import { Flex } from "@mantine/core";
import { CVCard } from "../../shared/components";
import { useSelector } from "react-redux";
import {
  selectResumesIDAndNameMap,
  selectSelectedResume,
} from "../../store/selectors/resume";
import classes from "./left-panel.module.css";

const LeftPanel = () => {
  const idAndNameMap = useSelector(selectResumesIDAndNameMap);
  const { id } = useSelector(selectSelectedResume);

  const resumeNames = Object.values(idAndNameMap);
  const selectedResumeName = idAndNameMap[id];

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
        <CVCard isNew={true} name="+ NEW" />
        {resumeNames.map((name) => (
          <CVCard name={name} isActive={name === selectedResumeName} />
        ))}
        <CVCard name={"Dummy"} />
        <CVCard name={"Dummy"} />
      </Flex>
    </div>
  );
};

export default LeftPanel;
