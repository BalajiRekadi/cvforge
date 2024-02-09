import "./form-block.css";
import { FormBlock } from "../../shared/types";
import FormBlockEntry from "./form-block-entry/FormBlockEntry";
import FormBlockOptions from "./form-block-options/FormBlockOptions";
import { Accordion } from "@mantine/core";

interface FormBlockProps {
  formData: FormBlock;
}

const FormBlock = ({ formData }: FormBlockProps) => {
  return (
    <Accordion.Item key={formData.id} value={formData.name}>
      <Accordion.Control icon={""}>
        <div>{formData.name}</div>
        <FormBlockOptions />
      </Accordion.Control>
      <Accordion.Panel>
        <div className="form-block">
          <div className="form-block-entries">
            {formData.entries.map((entry, index) => (
              <FormBlockEntry
                entryData={entry}
                index={index}
                key={entry.id}
                sectionId={formData.id}
              />
            ))}
          </div>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
export default FormBlock;
