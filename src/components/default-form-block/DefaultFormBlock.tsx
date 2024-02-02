import { Accordion, TextInput, Textarea } from "@mantine/core";
import "./default-form-block.css";
import { DefaultFormBlock } from "../../shared/types";

interface DefaultFormBlockProps {
  formData: DefaultFormBlock | undefined;
}

const DefaultFormBlock = ({ formData }: DefaultFormBlockProps) => {
  return (
    <Accordion.Item key={"Identity"} value={"Identity"}>
      <Accordion.Control icon={""}>{formData?.title}</Accordion.Control>
      <Accordion.Panel>
        <div className="default-form-block">
          <TextInput placeholder="FullName" value={formData?.fullName} />
          <TextInput placeholder="Designation" value={formData?.designation} />
          <div className="display-horizontal">
            <TextInput placeholder="Phone" value={formData?.phone} />
            <TextInput placeholder="Mail" value={formData?.mail} />
          </div>
          <div className="display-horizontal">
            <TextInput placeholder="Linkedin" value={formData?.linkedIn} />
            <TextInput placeholder="Github" value={formData?.github} />
          </div>
          <Textarea
            rows={5}
            placeholder="Give a brief description about your personality, skills you have, your career etc"
            value={formData?.about}
          />
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
export default DefaultFormBlock;
