import { TextInput } from "@mantine/core";
import { ChangeEventHandler, useState } from "react";
import "./form-block.css";

// interface FormBlockProps {
//   id: string;
//   title: string;
//   subTitle: string;
//   summary: string;
// }

const FormBlock = () => {
  const [title, setTilte] = useState("");

  const titleHandler = (event: ChangeEventHandler<HTMLInputElement>): void => {
    console.log(event);
  };
  return (
    <div className="form-block">
      <TextInput
        placeholder="Title"
        value={title}
        onChange={() => titleHandler}
      />
      <TextInput
        placeholder="subTitle"
        value={title}
        onChange={() => titleHandler}
      />
      <TextInput
        placeholder="summary"
        value={title}
        onChange={() => titleHandler}
      />
    </div>
  );
};
export default FormBlock;
