import { IconFlame } from "@tabler/icons-react";
import classes from "./side-menu.module.css";
import { ActionIcon, Tooltip } from "@mantine/core";

const SideMenu = ({ onMenuChange, activePanel }) => {
  const onMenuChangeHandler = (event: any, button: string) => {
    event.preventDefault();
    onMenuChange(button);
  };

  return (
    <div className={classes["side-menu"]}>
      <Tooltip label="Forms">
        <ActionIcon
          size="lg"
          onClick={(event) => onMenuChangeHandler(event, "FORMS")}
          variant={activePanel === "FORMS" ? "filled" : "light"}
        >
          <IconFlame />
        </ActionIcon>
      </Tooltip>
      {/* <Tooltip label="Settings">
        <ActionIcon
          size="lg"
          onClick={(event) => onMenuChangeHandler(event, "SETTINGS")}
          loading={false}
          variant={activePanel === "SETTINGS" ? "filled" : "light"}
        >
          <IconHeart />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Templates">
        <ActionIcon
          size="lg"
          onClick={(event) => onMenuChangeHandler(event, "TEMPLATES")}
          loading={false}
          variant={activePanel === "TEMPLATES" ? "filled" : "light"}
        >
          <IconHeart />
        </ActionIcon>
      </Tooltip> */}
    </div>
  );
};

export default SideMenu;
