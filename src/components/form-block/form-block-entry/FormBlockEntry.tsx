import { ActionIcon, TextInput, Textarea, rem } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import classes from "./form-block-entry.module.css";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { updateBlockField } from "../../../store/reducers/resume";
import { FormBlockEntry } from "../../../shared/types";

interface FormBlockEntryProps {
  entryData: FormBlockEntry;
  sectionId: string;
  index: number;
}

const FormBlockEntry = ({
  sectionId,
  entryData,
  index,
}: FormBlockEntryProps) => {
  const dispatch = useDispatch();

  const onChangeHandler = (event: ChangeEvent<any>, field: string): void => {
    dispatch(
      updateBlockField({
        sectionId,
        id: entryData.id,
        value: event.target.value,
        field,
      } as any)
    );
  };
  return (
    <div className={classes["form-block-entries"]}>
      <div className={classes["entry-header"]}>
        <div>Entry {index + 1}</div>
        <ActionIcon
          variant="default"
          size="lg"
          aria-label="Gallery"
          className={classes["form-block-entries__delete"]}
        >
          <IconX style={{ width: rem(20) }} stroke={1.5} />
        </ActionIcon>
      </div>
      <TextInput
        placeholder="Title"
        value={entryData.title}
        onChange={(event) => onChangeHandler(event, "title")}
      />
      <TextInput
        placeholder="Subtitle"
        value={entryData.subTitle}
        onChange={(event) => onChangeHandler(event, "subTitle")}
      />
      <TextInput
        placeholder="Another subtitle"
        value={entryData.subTitle2}
        onChange={(event) => onChangeHandler(event, "subTitle2")}
      />
      <Textarea
        rows={4}
        placeholder="Add summary"
        value={entryData.summary}
        onChange={(event) => onChangeHandler(event, "summary")}
      />
    </div>
  );
};

export default FormBlockEntry;
