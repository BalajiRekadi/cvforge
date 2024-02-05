import { Accordion, Button } from "@mantine/core";
import DefaultFormBlock from "../../default-form-block/DefaultFormBlock";
import { useSelector } from "react-redux";
import { getSelectedResume } from "../../../store/selectors/resume";
import FormBlock from "../../form-block/FormBlock";

const Forms = () => {
  // TODO: getSelectedResume runs for every rerender
  const resume = useSelector(getSelectedResume);
  const blocks = resume ? resume.formBlocks : {};
  const blockIds = Object.keys(blocks);
  return (
    <div>
      <Accordion variant="filled" defaultValue="Identity">
        <DefaultFormBlock formData={resume?.defaultFormBlock} />

        {blockIds.map((id) => (
          <Accordion.Item key={id} value={blocks[id].title}>
            <Accordion.Control icon={""}>{blocks[id].title}</Accordion.Control>
            <Accordion.Panel>
              <FormBlock formData={blocks[id]} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Button variant="light" color="yellow" fullWidth>
        Add new section
      </Button>
    </div>
  );
};

export default Forms;
