import { Accordion, TextInput, Textarea } from "@mantine/core";
import classes from "./default-form-block.module.css";
import { DefaultFormBlock } from "../../shared/types";
import { useDispatch } from "react-redux";
import { updateDefaultBlockField } from "../../store/reducers/resume";
import { INPUT_SIZE, RADIUS, TEXTAREA_ROWS } from "../../constants";
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";

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
      <Accordion.Control icon={""}>
        <div className={classes["default-form-block-title"]}>
          {formData?.title}
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <div className={classes["default-form-block"]}>
          <TextInput
            size={INPUT_SIZE}
            placeholder="FullName"
            radius={RADIUS}
            value={formData?.fullName}
            onChange={(event) => onChangeHandler(event, "fullName")}
            spellCheck={false}
          />
          <TextInput
            size={INPUT_SIZE}
            radius={RADIUS}
            placeholder="Designation"
            value={formData?.designation}
            onChange={(event) => onChangeHandler(event, "designation")}
            spellCheck={false}
          />
          <div className={classes["display-horizontal"]}>
            <TextInput
              size={INPUT_SIZE}
              radius={RADIUS}
              placeholder="Phone"
              value={formData?.phone}
              onChange={(event) => onChangeHandler(event, "phone")}
              leftSection={<IconPhone size={16} />}
              spellCheck={false}
            />
            <TextInput
              size={INPUT_SIZE}
              radius={RADIUS}
              placeholder="Mail"
              value={formData?.mail}
              onChange={(event) => onChangeHandler(event, "mail")}
              leftSection={<IconAt size={16} />}
              spellCheck={false}
            />
          </div>
          <div className={classes["display-horizontal"]}>
            <TextInput
              size={INPUT_SIZE}
              radius={RADIUS}
              placeholder="Linkedin"
              value={formData?.linkedIn}
              onChange={(event) => onChangeHandler(event, "linkedIn")}
              leftSection={<IconBrandLinkedin size={16} />}
              spellCheck={false}
            />
            <TextInput
              size={INPUT_SIZE}
              radius={RADIUS}
              placeholder="Github"
              value={formData?.github}
              onChange={(event) => onChangeHandler(event, "github")}
              leftSection={<IconBrandGithub size={16} />}
              spellCheck={false}
            />
          </div>
          <Textarea
            size={INPUT_SIZE}
            radius={RADIUS}
            spellCheck={false}
            rows={TEXTAREA_ROWS}
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
