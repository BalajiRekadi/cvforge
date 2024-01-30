import "./preview.css";

interface PreviewProps {
  scale: number;
}
const Preview = (props: PreviewProps) => {
  const { scale } = props;
  console.log(scale);
  return (
    <div
      className="preview"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      Preview
    </div>
  );
};

export default Preview;
