import { TextInput } from "@mantine/core";

const FormBlock = () => {
  return (
    <div>
      <div>About</div>
      <TextInput placeholder="Good Name" />
      <TextInput placeholder="Designation" />
      <TextInput placeholder="Phone" />
      <TextInput placeholder="Linkedin" />
      <TextInput placeholder="Github" />
    </div>
  );
};
export default FormBlock;
