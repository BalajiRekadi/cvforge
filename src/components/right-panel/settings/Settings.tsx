import { ColorPicker, Paper, Slider, Title } from "@mantine/core";
import { COLORSWATCHES, RADIUS } from "../../../constants";
import classes from "./settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFontSize,
  selectResumeTheme,
} from "../../../store/selectors/resume";
import {
  updateFontSize,
  updateResumeTheme,
} from "../../../store/reducers/resume";

const Settings = () => {
  const dispatch = useDispatch();

  const fontSize = useSelector(selectFontSize);
  const themeColor = useSelector(selectResumeTheme);

  // TODO: q2
  const onFontSizeChange = (value) => {
    dispatch(updateFontSize(value));
  };

  const onResumeThemeChange = (value) => {
    dispatch(updateResumeTheme(value));
  };

  return (
    <Paper radius={RADIUS} withBorder={true} className={classes["settings"]}>
      <Title order={3}>Settings</Title>

      <div className={classes["content"]}>
        <div className={classes["fontsize"]}>
          <Title order={5}>Font Size</Title>
          <Slider
            size="sm"
            step={0.25}
            defaultValue={10}
            value={fontSize}
            min={9}
            max={12}
            onChange={onFontSizeChange}
            labelAlwaysOn={true}
          />
        </div>

        <div className={classes["resume-theme"]}>
          <Title order={5}>Theme</Title>
          <ColorPicker
            value={themeColor}
            format="hex"
            swatches={COLORSWATCHES}
            withPicker={false}
            onChange={onResumeThemeChange}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Settings;
