import { ColorPicker, Slider, Title } from "@mantine/core";
import { COLORSWATCHES } from "../../../constants";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <Title order={3}>Settings</Title>

      <Title order={5}>Font Size</Title>
      <Slider
        className="slider"
        size="sm"
        defaultValue={12}
        min={10}
        max={16}
        labelAlwaysOn={true}
      />

      <Title order={5}>Theme</Title>
      <ColorPicker
        className="color-picker"
        format="hex"
        swatches={COLORSWATCHES}
        withPicker={false}
      />
    </div>
  );
};

export default Settings;
