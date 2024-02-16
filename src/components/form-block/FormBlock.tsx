import classes from "./form-block.module.css";
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
      <Accordion.Control>
        <div className={classes["form-block-Accordion-label"]}>
          <div className={classes["form-block-title"]}>{formData.name}</div>
          <FormBlockOptions />
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <div className={classes["form-block"]}>
          <div className={classes["form-block-entries"]}>
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
