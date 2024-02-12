import { useState } from "react";
import Forms from "./forms/Forms";
import classes from "./right-panel.module.css";
import Settings from "./settings/Settings";
import SideMenu from "./side-menu/SideMenu";
import { Slider } from "@mantine/core";

const RightPanel = () => {
  const [activePanel, setActivePanel] = useState("FORMS");

  const onMenuChange = (button: string) => {
    setActivePanel(button);
  };

  return (
    <div className={classes["right-panel"]}>
      <div className={classes["right-panel__content"]}>
        <Slider
          size="sm"
          defaultValue={12}
          min={10}
          max={16}
          labelAlwaysOn={true}
        />
        {activePanel === "FORMS" && <Forms />}
        {activePanel === "SETTINGS" && <Settings />}
      </div>
      <SideMenu onMenuChange={onMenuChange} activePanel={activePanel} />
    </div>
  );
};

export default RightPanel;
