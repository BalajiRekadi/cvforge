import { TextInput, Textarea } from "@mantine/core";
import "./default-form-block.css";

const DefaultFormBlock = () => {
  return (
    <div className="default-form-block">
      <TextInput placeholder="FullName" />
      <TextInput placeholder="Designation" />
      <TextInput placeholder="Phone" />
      <TextInput placeholder="Linkedin" />
      <TextInput placeholder="Github" />
      <Textarea
        rows={5}
        placeholder="Give a brief description about your personality, skills you have, your career etc"
      />
    </div>
  );
};
export default DefaultFormBlock;
