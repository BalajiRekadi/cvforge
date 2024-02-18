import { useState } from "react";
import Forms from "./forms/Forms";
import classes from "./right-panel.module.css";
import Settings from "./settings/Settings";
import { Button, ScrollArea, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { addNewSection } from "../../store/reducers/resume";
import {
  selectResumesIDAndNameMap,
  selectSelectedResume,
} from "../../store/selectors/resume";
import FormBlockNameModal from "./formblock-name-modal/FormBlockNameModal";

const RightPanel = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const idAndNameMap = useSelector(selectResumesIDAndNameMap);
  const { id } = useSelector(selectSelectedResume);
  const [opened, { open, close }] = useDisclosure(false);

  const selectedResumeName = idAndNameMap[id];

  const onAddClick = () => {
    dispatch(addNewSection(name as any));
    close();
    setName("");
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={classes["right-panel"]}>
      <div className={classes["content"]}>
        <Title order={2}>{selectedResumeName}</Title>

        <ScrollArea
          offsetScrollbars
          scrollbarSize={4}
          scrollHideDelay={0}
          className={classes["scrollarea"]}
        >
          <Settings />
          <Forms />
        </ScrollArea>
        <Button
          variant="light"
          color="yellow"
          className={classes["section-button"]}
          onClick={open}
        >
          Add new section
        </Button>
      </div>
      <FormBlockNameModal
        opened={opened}
        onButtonClick={onAddClick}
        name={name}
        close={close}
        onNameChange={onNameChange}
        buttonText={"Add"}
        title={"Enter Section Name"}
      />
    </div>
  );
};

export default RightPanel;
