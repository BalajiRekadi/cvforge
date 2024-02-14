import { Accordion } from "@mantine/core";
import DefaultFormBlock from "../../default-form-block/DefaultFormBlock";
import { useSelector } from "react-redux";
import { getSelectedResume } from "../../../store/selectors/resume";
import FormBlock from "../../form-block/FormBlock";
import classes from "./forms.module.css";

const Forms = () => {
  // TODO: getSelectedResume runs for every rerender
  const resume = useSelector(getSelectedResume);

  const blocks = resume ? resume.formBlocks : {};
  const blockIds = Object.keys(blocks);

  return (
    <div className={classes["forms"]}>
      <Accordion variant="" defaultValue="Identity">
        <DefaultFormBlock formData={resume?.defaultFormBlock} />
        {blockIds.map((id) => (
          <FormBlock formData={blocks[id]} />
        ))}
      </Accordion>
    </div>
  );
};

export default Forms;
