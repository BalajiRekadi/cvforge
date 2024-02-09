import { ActionIcon, rem } from "@mantine/core";
import { IconArrowsVertical } from "@tabler/icons-react";
import { IconArrowsHorizontal } from "@tabler/icons-react";
import { IconPlaylistAdd } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";

const FormBlockOptions = () => {
  const onAddEntryClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="md" aria-label="Vertical">
        <IconArrowsVertical style={{ width: rem(15) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="md" aria-label="Horizontal">
        <IconArrowsHorizontal style={{ width: rem(15) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon
        variant="default"
        size="md"
        aria-label="Entry"
        onClick={onAddEntryClick}
      >
        <IconPlaylistAdd style={{ width: rem(15) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="md" aria-label="Delete">
        <IconTrash style={{ width: rem(15) }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
};

export default FormBlockOptions;
