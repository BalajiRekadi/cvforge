import { useState } from "react";
import Forms from "./forms/Forms";
import classes from "./right-panel.module.css";
import Settings from "./settings/Settings";
import { Button, ScrollArea, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { INPUT_SIZE, RADIUS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNewSection } from "../../store/reducers/resume";
import { v4 as uuidv4 } from "uuid";
import {
  selectResumesIDAndNameMap,
  selectSelectedResume,
} from "../../store/selectors/resume";
import CVModal from "../../shared/components/modal/Modal";

const RightPanel = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const idAndNameMap = useSelector(selectResumesIDAndNameMap);
  const { id } = useSelector(selectSelectedResume);
  const [opened, { open, close }] = useDisclosure(false);

  const selectedResumeName = idAndNameMap[id];

  const onAddClick = () => {
    dispatch(
      addNewSection({
        id: uuidv4(),
        name: name,
        entries: [
          {
            id: uuidv4(),
            title: "",
            subTitle: "",
            subTitle2: "",
            summary: "",
          },
        ],
      } as any)
    );
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
      <CVModal
        opened={opened}
        title={"Enter Section Name"}
        close={close}
        onAddClick={onAddClick}
      >
        <TextInput
          size={INPUT_SIZE}
          radius={RADIUS}
          placeholder="Title"
          value={name}
          onChange={onNameChange}
          spellCheck={false}
          data-autofocus
        />
      </CVModal>
    </div>
  );
};

export default RightPanel;
