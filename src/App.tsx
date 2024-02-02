import { Title, createTheme } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import SideMenu from "./components/side-menu/SideMenu";
import { customTheme } from "./constants";
import MiddlePanel from "./components/middle-panel/MiddlePanel";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";
import { IconFileSmile } from "@tabler/icons-react";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const theme = createTheme(customTheme);
  return (
    <MantineProvider theme={theme} forceColorScheme={"dark"}>
      <Provider store={store}>
        <div className="app">
          <header className="app-header">
            <IconFileSmile color="yellow" />
            <Title order={3} c="yellow">
              CVFORGE
            </Title>
          </header>
          <div className="app-content">
            <LeftPanel />
            <MiddlePanel />
            <RightPanel />
            <SideMenu />
          </div>
        </div>
      </Provider>
    </MantineProvider>
  );
}

export default App;
