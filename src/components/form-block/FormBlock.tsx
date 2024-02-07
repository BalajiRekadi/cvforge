import classes from "./form-block.module.css";
import { FormBlock } from "../../shared/types";
import FormBlockEntry from "./form-block-entry/FormBlockEntry";
import FormBlockOptions from "./form-block-options/FormBlockOptions";

interface FormBlockProps {
  formData: FormBlock;
}

const FormBlock = ({ formData }: FormBlockProps) => {
  return (
    <div className={classes["form-block"]}>
      <FormBlockOptions />
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
  );
};
export default FormBlock;
