import { useEffect, useRef } from "react";
import "./middle-panel.css";
import Preview from "./preview/Preview";
import { onWheelHanlder } from "./handlers";
import ToolBar from "./toolbar/ToolBar";
// import MyDocument from "./document/Document";
// import { PDFViewer } from "@react-pdf/renderer";
// import { useSelector } from "react-redux";
// import { getSelectedResume } from "../../store/selectors/resume";

const MiddlePanel = () => {
  const ref: any = useRef();
  const panelRef: any = useRef();

  // const resume = useSelector(getSelectedResume);

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
      {/* <PDFViewer>
        <MyDocument resume={resume} />
      </PDFViewer> */}
      <ToolBar />
    </div>
  );
};

export default MiddlePanel;
