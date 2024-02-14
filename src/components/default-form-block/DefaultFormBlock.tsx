import { Accordion, TextInput, Textarea } from "@mantine/core";
import "./default-form-block.css";
import { DefaultFormBlock } from "../../shared/types";
import { useDispatch } from "react-redux";
import { updateDefaultBlockField } from "../../store/reducers/resume";
import { RADIUS } from "../../constants";

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
        <div className="form-block-title">{formData?.title}</div>
      </Accordion.Control>
      <Accordion.Panel>
        <div className="default-form-block">
          <TextInput
            placeholder="FullName"
            radius={RADIUS}
            value={formData?.fullName}
            onChange={(event) => onChangeHandler(event, "fullName")}
          />
          <TextInput
            radius={RADIUS}
            placeholder="Designation"
            value={formData?.designation}
            onChange={(event) => onChangeHandler(event, "designation")}
          />
          <div className="display-horizontal">
            <TextInput
              radius={RADIUS}
              placeholder="Phone"
              value={formData?.phone}
              onChange={(event) => onChangeHandler(event, "phone")}
            />
            <TextInput
              radius={RADIUS}
              placeholder="Mail"
              value={formData?.mail}
              onChange={(event) => onChangeHandler(event, "mail")}
            />
          </div>
          <div className="display-horizontal">
            <TextInput
              radius={RADIUS}
              placeholder="Linkedin"
              value={formData?.linkedIn}
              onChange={(event) => onChangeHandler(event, "linkedIn")}
            />
            <TextInput
              radius={RADIUS}
              placeholder="Github"
              value={formData?.github}
              onChange={(event) => onChangeHandler(event, "github")}
            />
          </div>
          <Textarea
            radius={RADIUS}
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
