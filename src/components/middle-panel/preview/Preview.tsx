import { forwardRef } from "react";
import "./preview.css";

const Preview = forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} className="preview">
      Preview
    </div>
  );
});

export default Preview;
