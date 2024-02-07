import { Accordion, TextInput, Textarea } from "@mantine/core";
import classes from "./default-form-block.module.css";
import { DefaultFormBlock } from "../../shared/types";
import { useDispatch } from "react-redux";
import { updateDefaultBlockField } from "../../store/reducers/resume";

interface DefaultFormBlockProps {
  formData: DefaultFormBlock | undefined;
}

const DefaultFormBlock = ({ formData }: DefaultFormBlockProps) => {
  const dispatch = useDispatch();

  const onChangeHandler = (event, field: string) => {
    dispatch(
      updateDefaultBlockField({ value: event.target.value, field } as any)
    );
  };

  return (
    <Accordion.Item key={"Identity"} value={"Identity"}>
      <Accordion.Control icon={""}>{formData?.title}</Accordion.Control>
      <Accordion.Panel>
        <div className={classes["default-form-block"]}>
          <TextInput
            placeholder="FullName"
            value={formData?.fullName}
            onChange={(event) => onChangeHandler(event, "fullName")}
          />
          <TextInput
            placeholder="Designation"
            value={formData?.designation}
            onChange={(event) => onChangeHandler(event, "designation")}
          />
          <div className={classes["display-horizontal"]}>
            <TextInput
              placeholder="Phone"
              value={formData?.phone}
              onChange={(event) => onChangeHandler(event, "phone")}
            />
            <TextInput
              placeholder="Mail"
              value={formData?.mail}
              onChange={(event) => onChangeHandler(event, "mail")}
            />
          </div>
          <div className={classes["display-horizontal"]}>
            <TextInput
              placeholder="Linkedin"
              value={formData?.linkedIn}
              onChange={(event) => onChangeHandler(event, "linkedIn")}
            />
            <TextInput
              placeholder="Github"
              value={formData?.github}
              onChange={(event) => onChangeHandler(event, "github")}
            />
          </div>
          <Textarea
            rows={5}
            placeholder="Give a brief description about your personality, your skills, your career etc"
            value={formData?.about}
            onChange={(event) => onChangeHandler(event, "about")}
          />
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
export default DefaultFormBlock;
