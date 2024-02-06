import { ActionIcon, TextInput, Textarea, rem } from "@mantine/core";
import { ChangeEventHandler } from "react";
import { IconX } from "@tabler/icons-react";
import classes from "./form-block-entry.module.css";

const FormBlockEntry = ({ entryData }) => {
  const titleHandler = (event: ChangeEventHandler<HTMLInputElement>): void => {
    console.log(event);
  };
  return (
    <div className={classes["form-block-entries"]}>
      <ActionIcon
        variant="default"
        size="lg"
        aria-label="Gallery"
        className={classes["form-block-entries__delete"]}
      >
        <IconX style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
      <TextInput
        placeholder="Title"
        value={entryData.title}
        onChange={() => titleHandler}
      />
      <TextInput
        placeholder="subTitle"
        value={entryData.subTitle}
        onChange={() => titleHandler}
      />
      <TextInput
        placeholder="summary"
        value={entryData.summary}
        onChange={() => titleHandler}
      />
      <Textarea
        rows={4}
        placeholder="Add summary"
        value={entryData.summary}
        onChange={() => titleHandler}
      />
    </div>
  );
};

export default FormBlockEntry;
