import { Accordion, Title } from "@mantine/core";
import DefaultFormBlock from "../../default-form-block/DefaultFormBlock";
import { useSelector } from "react-redux";
import { selectSelectedResume } from "../../../store/selectors/resume";
import FormBlock from "../../form-block/FormBlock";
import classes from "./forms.module.css";

const Forms = () => {
  // TODO: selectSelectedResume runs for every rerender
  const resume = useSelector(selectSelectedResume);

  const blocks = resume ? resume.formBlocks : {};
  const blockIds = Object.keys(blocks);

  return (
    <div className={classes["forms"]}>
      <Title order={3}>Details</Title>
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
