import { createTheme } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import SideMenu from "./components/side-menu/SideMenu";
import { customTheme } from "./constants";
import MiddlePanel from "./components/middle-panel/MiddlePanel";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";
import { IconFileCv } from "@tabler/icons-react";

function App() {
  const theme = createTheme(customTheme);
  return (
    <MantineProvider theme={theme} forceColorScheme={"dark"}>
      <div className="app">
        <header className="app-header">
          <IconFileCv />
          <h3>CVFORGE</h3>
        </header>
        <div className="app-content">
          <SideMenu />
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
