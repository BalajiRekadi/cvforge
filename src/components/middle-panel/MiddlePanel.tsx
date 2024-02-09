import { useEffect, useRef } from "react";
import "./middle-panel.css";
import Preview from "./preview/Preview";
import { onWheelHanlder } from "./handlers";

const MiddlePanel = () => {
  const ref: any = useRef();
  const panelRef: any = useRef();

  useEffect(() => {
    const panelElement = panelRef.current;
    if (panelElement && ref.current) {
      const scale: { value: number } = { value: 1 };
      panelElement.addEventListener("wheel", (event) =>
        onWheelHanlder(event, ref.current, scale)
      );
    }
    return () => {
      if (panelElement) {
        panelElement.removeEventListener("wheel", onWheelHanlder);
      }
    };
  }, []);

  return (
    <div className="middle-panel" ref={panelRef}>
      <Preview ref={ref} />
    </div>
  );
};

export default MiddlePanel;
