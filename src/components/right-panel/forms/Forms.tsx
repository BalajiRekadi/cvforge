import { Accordion, Button, Modal, TextInput } from "@mantine/core";
import DefaultFormBlock from "../../default-form-block/DefaultFormBlock";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedResume } from "../../../store/selectors/resume";
import FormBlock from "../../form-block/FormBlock";
import classes from "./forms.module.css";
import { addNewSection } from "../../../store/reducers/resume";
import { v4 as uuidv4 } from "uuid";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { RADIUS } from "../../../constants";

const Forms = () => {
  // TODO: getSelectedResume runs for every rerender
  const resume = useSelector(getSelectedResume);
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const blocks = resume ? resume.formBlocks : {};
  const blockIds = Object.keys(blocks);

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
    <div className={classes["forms"]}>
      <Accordion variant="" defaultValue="Identity">
        <DefaultFormBlock formData={resume?.defaultFormBlock} />
        {blockIds.map((id) => (
          <FormBlock formData={blocks[id]} />
        ))}
      </Accordion>

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
          className={classes["section-button"]}
          onClick={onAddClick}
        >
          Add
        </Button>
      </Modal>

      <Button
        variant="light"
        color="yellow"
        className={classes["section-button"]}
        onClick={open}
      >
        Add new section
      </Button>
    </div>
  );
};

export default Forms;
