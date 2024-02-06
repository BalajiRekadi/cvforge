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
        {formData.entries.map((entry) => (
          <FormBlockEntry entryData={entry} />
        ))}
      </div>
    </div>
  );
};
export default FormBlock;
