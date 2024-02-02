import { IconFlame, IconHeart } from "@tabler/icons-react";
import "./side-menu.css";
import { ActionIcon, Tooltip } from "@mantine/core";

const SideMenu = () => {
  // TODO: For active button change variant prop
  return (
    <div className="side-menu">
      <Tooltip label="CV Content">
        <ActionIcon
          size="lg"
          onClick={(event) => event.preventDefault()}
          variant="outline"
        >
          <IconFlame />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="CV theme and font">
        <ActionIcon
          size="lg"
          onClick={(event) => event.preventDefault()}
          loading={true}
          variant="outline"
        >
          <IconHeart />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="CV template">
        <ActionIcon
          size="lg"
          onClick={(event) => event.preventDefault()}
          loading={false}
          variant="outline"
        >
          <IconHeart />
        </ActionIcon>
      </Tooltip>
    </div>
  );
};

export default SideMenu;
