import { TextInput } from "@mantine/core";
import { ChangeEventHandler } from "react";
import "./form-block.css";
import { FormBlock } from "../../shared/types";

interface FormBlockProps {
  formData: FormBlock;
}

const FormBlock = ({ formData }: FormBlockProps) => {
  const titleHandler = (event: ChangeEventHandler<HTMLInputElement>): void => {
    console.log(event);
  };

  return (
    <div className="form-block">
      <TextInput
        placeholder="Title"
        value={formData.title}
        onChange={() => titleHandler}
      />
      <TextInput
        placeholder="subTitle"
        value={formData.subTitle}
        onChange={() => titleHandler}
      />
      <TextInput
        placeholder="summary"
        value={formData.summary}
        onChange={() => titleHandler}
      />
    </div>
  );
};
export default FormBlock;
