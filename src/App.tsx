import { Title, createTheme } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import { customTheme } from "./constants";
import MiddlePanel from "./components/middle-panel/MiddlePanel";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";
import { IconFileSmile } from "@tabler/icons-react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Font } from "@react-pdf/renderer";

function App() {
  const theme = createTheme(customTheme);

  // TODO: Also change in css file if this is changed
  // TODO: Check how many times app is rendering
  Font.register({
    family: "Open Sans",
    fonts: [
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
        fontWeight: 600,
      },
    ],
  });

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
          </div>
        </div>
      </Provider>
    </MantineProvider>
  );
}

export default App;
