import { Accordion } from "@mantine/core";
import DefaultFormBlock from "../default-form-block/DefaultFormBlock";
// import FormBlock from "../form-block/FormBlock";
import "./right-panel.css";
import { useSelector } from "react-redux";
import { getSelectedResume } from "../../store/selectors/resume";

const RightPanel = () => {
  // TODO: getSelectedResume runs for every rerender
  const resume = useSelector(getSelectedResume);

  return (
    <div className="right-panel">
      <Accordion variant="filled" defaultValue="Identity">
        <DefaultFormBlock formData={resume?.defaultFormBlock} />

        {/* {[].map((item) => (
          <Accordion.Item key={item.id} value={item.title}>
            <Accordion.Control icon={""}>{item.title}</Accordion.Control>
            <Accordion.Panel>
              <FormBlock />
            </Accordion.Panel>
          </Accordion.Item>
        ))} */}
      </Accordion>
    </div>
  );
};

export default RightPanel;
