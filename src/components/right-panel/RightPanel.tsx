import { useState } from "react";
import Forms from "./forms/Forms";
import "./right-panel.css";
import Settings from "./settings/Settings";
import SideMenu from "./side-menu/SideMenu";
import { Button, Modal, ScrollArea, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RADIUS } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewSection } from "../../store/reducers/resume";
import { v4 as uuidv4 } from "uuid";

const RightPanel = () => {
  const [activePanel, setActivePanel] = useState("FORMS");
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onMenuChange = (button: string) => {
    setActivePanel(button);
  };

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
    <div className="right-panel">
      <div className="content">
        <ScrollArea
          offsetScrollbars
          scrollbarSize={4}
          scrollHideDelay={0}
          className={"scrollarea"}
        >
          {/* TODO: Remove Settings when settings panel is implemented */}
          <Settings />

          <Title order={3}>Forms</Title>

          {activePanel === "FORMS" && <Forms />}
          {activePanel === "SETTINGS" && <Settings />}
        </ScrollArea>
        <Button
          variant="light"
          color="yellow"
          className="section-button"
          onClick={open}
        >
          Add new section
        </Button>
      </div>
      <SideMenu onMenuChange={onMenuChange} activePanel={activePanel} />
      <Modal opened={opened} onClose={close} title="Enter section name">
        <TextInput
          radius={RADIUS}
          placeholder="Title"
          value={name}
          onChange={onNameChange}
          data-autofocus
        />
        <br />
        <Button
          variant="light"
          color="yellow"
          className={"section-button"}
          onClick={onAddClick}
        >
          Add
        </Button>
      </Modal>
    </div>
  );
};

export default RightPanel;
