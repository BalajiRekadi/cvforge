import { useState } from "react";
import Forms from "./forms/Forms";
import classes from "./right-panel.module.css";
import Settings from "./settings/Settings";
import SideMenu from "./side-menu/SideMenu";

const RightPanel = () => {
  const [activePanel, setActivePanel] = useState("FORMS");

  const onMenuChange = (button: string) => {
    setActivePanel(button);
  };

  return (
    <div className={classes["right-panel"]}>
      <div className={classes["right-panel__content"]}>
        {activePanel === "FORMS" && <Forms />}
        {activePanel === "SETTINGS" && <Settings />}
      </div>
      <SideMenu onMenuChange={onMenuChange} activePanel={activePanel} />
    </div>
  );
};

export default RightPanel;
