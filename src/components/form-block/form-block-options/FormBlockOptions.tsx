import { ActionIcon, Tooltip, rem } from "@mantine/core";
// import { IconArrowsVertical } from "@tabler/icons-react";
// import { IconArrowsHorizontal } from "@tabler/icons-react";
import { IconPlaylistAdd } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import {
  addEntry,
  deleteFormBlock,
  updateFormBlockName,
} from "../../../store/reducers/resume";
import { IconEdit } from "@tabler/icons-react";
import FormBlockNameModal from "../../right-panel/formblock-name-modal/FormBlockNameModal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const FormBlockOptions = ({ id, blockName }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();

  const [name, setName] = useState(blockName);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onAddEntryClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addEntry(id));
  };

  const onDeleteHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(deleteFormBlock(id));
  };

  const onEditClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    open();
  };

  const onUpdateClick = () => {
    dispatch(updateFormBlockName({ id, name } as any));
    close();
  };

  return (
    <>
      <ActionIcon.Group>
        {/* <ActionIcon variant="default" size="md" aria-label="Vertical">
        <IconArrowsVertical style={{ width: rem(15) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="md" aria-label="Horizontal">
        <IconArrowsHorizontal style={{ width: rem(15) }} stroke={1.5} />
      </ActionIcon> */}

        <ActionIcon
          variant="default"
          size="md"
          aria-label="Entry"
          onClick={onEditClick}
        >
          <Tooltip label="Edit Section Name" openDelay={1000} color="dark.8">
            <IconEdit style={{ width: rem(15) }} stroke={1.5} />
          </Tooltip>
        </ActionIcon>

        <ActionIcon
          variant="default"
          size="md"
          aria-label="Entry"
          onClick={onAddEntryClick}
        >
          <Tooltip label="Add New Entry" openDelay={1000} color="dark.8">
            <IconPlaylistAdd style={{ width: rem(15) }} stroke={1.5} />
          </Tooltip>
        </ActionIcon>

        <ActionIcon
          variant="default"
          size="md"
          aria-label="Delete"
          onClick={onDeleteHandler}
        >
          <Tooltip label="Delete Section" openDelay={1000} color="dark.8">
            <IconTrash style={{ width: rem(15) }} stroke={1.5} />
          </Tooltip>
        </ActionIcon>
      </ActionIcon.Group>
      <FormBlockNameModal
        opened={opened}
        onButtonClick={onUpdateClick}
        name={name}
        close={close}
        onNameChange={onNameChange}
        buttonText={"Update"}
        title={"Update Section Name"}
      />
    </>
  );
};

export default FormBlockOptions;
