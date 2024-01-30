import { useState } from "react";
import "./middle-panel.css";
import Preview from "./preview/Preview";

const MiddlePanel = () => {
  const [scale, setScale] = useState<number>(1);

  const onScrollHandler = (event: WheelEvent) => {
    // TODO: Component renderes for every wheel event
    // Also preview stutters on fast wheel scroll
    setScale((prev) => {
      const scaleMultiplier = 0.001;
      const newScale = Number(prev + event.deltaY * scaleMultiplier);
      if (newScale > 0.5 && newScale < 1.2) {
        return newScale;
      }
      return prev;
    });
  };

  return (
    <div
      className="middle-panel"
      onWheel={(event: any) => onScrollHandler(event)}
    >
      <Preview scale={scale} />
    </div>
  );
};

export default MiddlePanel;
