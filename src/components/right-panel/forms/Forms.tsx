import { Accordion, Button } from "@mantine/core";
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
      <Accordion variant="filled" defaultValue="Identity">
        <DefaultFormBlock formData={resume?.defaultFormBlock} />

        {blockIds.map((id) => (
          <Accordion.Item key={id} value={blocks[id].name}>
            <Accordion.Control icon={""}>{blocks[id].name}</Accordion.Control>
            <Accordion.Panel>
              <FormBlock formData={blocks[id]} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Button
        variant="light"
        color="yellow"
        className={classes["section-button"]}
      >
        Add new section
      </Button>
    </div>
  );
};

export default Forms;
