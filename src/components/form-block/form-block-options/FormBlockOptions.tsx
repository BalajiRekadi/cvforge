import { ActionIcon, rem } from "@mantine/core";
import { IconArrowsVertical } from "@tabler/icons-react";
import { IconArrowsHorizontal } from "@tabler/icons-react";
import { IconPlaylistAdd } from "@tabler/icons-react";

const FormBlockOptions = () => {
  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconArrowsVertical style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconArrowsHorizontal style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconPlaylistAdd style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
};

export default FormBlockOptions;
