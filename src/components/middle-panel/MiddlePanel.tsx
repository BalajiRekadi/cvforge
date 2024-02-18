import { useEffect, useRef } from "react";
import classes from "./middle-panel.module.css";
import Preview from "./preview/Preview";
import { onWheelHanlder } from "./handlers";
import ToolBar from "./toolbar/ToolBar";
// import CVDocument from "./document/Document";
// import { PDFViewer } from "@react-pdf/renderer";
// import { useSelector } from "react-redux";
// import { selectSelectedResume } from "../../store/selectors/resume";

const MiddlePanel = () => {
  const ref: any = useRef();
  const panelRef: any = useRef();

  // const resume = useSelector(selectSelectedResume);

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
    <div className={classes["middle-panel"]} ref={panelRef}>
      <Preview ref={ref} />
      {/* <PDFViewer>
        <CVDocument resume={resume} />
      </PDFViewer> */}
      <ToolBar />
    </div>
  );
};

export default MiddlePanel;
