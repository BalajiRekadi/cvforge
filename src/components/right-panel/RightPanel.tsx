import { Accordion } from "@mantine/core";
import DefaultFormBlock from "../default-form-block/DefaultFormBlock";
import FormBlock from "../form-block/FormBlock";
import "./right-panel.css";

const resume = {
  id: "001",
  defaultFormBlock: {
    id: "defaultformblock001",
    title: "Identity",
    name: "Balaji Rekadi",
    designation: "Senior Software Engineer",
    linkedIn: "balaji.rekadi@linkedin.com",
  },
  formBlocks: [
    {
      id: "formblock001",
      title: "Education",
      subTitle: "MNR High School",
      summary: "2013",
    },
    {
      id: "formblock002",
      title: "Experience",
      subTitle: "M3BI, A zensar company",
      summary: "2021 - present",
    },
  ],
};

const RightPanel = () => {
  const { defaultFormBlock } = resume;

  return (
    <div className="right-panel">
      <Accordion variant="filled" defaultValue="Apples">
        <Accordion.Item
          key={defaultFormBlock.id}
          value={defaultFormBlock.title}
        >
          <Accordion.Control icon={""}>
            {defaultFormBlock.title}
          </Accordion.Control>
          <Accordion.Panel>
            <DefaultFormBlock />
          </Accordion.Panel>
        </Accordion.Item>
        {resume.formBlocks.map((item) => (
          <Accordion.Item key={item.id} value={item.title}>
            <Accordion.Control icon={""}>{item.title}</Accordion.Control>
            <Accordion.Panel>
              <FormBlock />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default RightPanel;
