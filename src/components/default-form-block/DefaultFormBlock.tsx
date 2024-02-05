import { Accordion, TextInput, Textarea } from "@mantine/core";
import classes from "./default-form-block.module.css";
import { DefaultFormBlock } from "../../shared/types";
import { useDispatch } from "react-redux";
import {
  updateAbout,
  updateDesignation,
  updateGithub,
  updateLinkedin,
  updateMail,
  updateName,
  updatePhone,
} from "../../store/reducers/resume";

interface DefaultFormBlockProps {
  formData: DefaultFormBlock | undefined;
}

const DefaultFormBlock = ({ formData }: DefaultFormBlockProps) => {
  const dispatch = useDispatch();

  const onChangeHandler = (event, type: string) => {
    switch (type) {
      case "name":
        dispatch(updateName(event.target.value));
        break;
      case "designation":
        dispatch(updateDesignation(event.target.value));
        break;
      case "phone":
        dispatch(updatePhone(event.target.value));
        break;
      case "mail":
        dispatch(updateMail(event.target.value));
        break;
      case "linkedin":
        dispatch(updateLinkedin(event.target.value));
        break;
      case "github":
        dispatch(updateGithub(event.target.value));
        break;
      case "about":
        dispatch(updateAbout(event.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <Accordion.Item key={"Identity"} value={"Identity"}>
      <Accordion.Control icon={""}>{formData?.title}</Accordion.Control>
      <Accordion.Panel>
        <div className={classes["default-form-block"]}>
          <TextInput
            placeholder="FullName"
            value={formData?.fullName}
            onChange={(event) => onChangeHandler(event, "name")}
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
              onChange={(event) => onChangeHandler(event, "linkedin")}
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
