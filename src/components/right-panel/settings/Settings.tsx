import { Slider } from "@mantine/core";

const Settings = () => {
  return (
    <Slider
      size="sm"
      defaultValue={12}
      min={10}
      max={16}
      labelAlwaysOn={true}
    />
  );
};

export default Settings;
