import { ActionIcon, TextInput, Textarea, rem } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import "./form-block-entry.css";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { updateBlockField } from "../../../store/reducers/resume";
import { FormBlockEntry } from "../../../shared/types";
import { INPUT_SIZE, RADIUS, TEXTAREA_ROWS } from "../../../constants";

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
    <div className="form-block-entries">
      <div className="entry-header">
        <div className="entry-title">Entry {index + 1}</div>
        <ActionIcon
          variant="default"
          size="md"
          aria-label="Gallery"
          className="form-block-entries__delete"
        >
          <IconX style={{ width: rem(15) }} stroke={1.5} />
        </ActionIcon>
      </div>
      <TextInput
        size={INPUT_SIZE}
        radius={RADIUS}
        placeholder="Title"
        value={entryData.title}
        onChange={(event) => onChangeHandler(event, "title")}
        spellCheck={false}
      />
      <TextInput
        size={INPUT_SIZE}
        radius={RADIUS}
        placeholder="Subtitle"
        value={entryData.subTitle}
        onChange={(event) => onChangeHandler(event, "subTitle")}
        spellCheck={false}
      />
      <TextInput
        size={INPUT_SIZE}
        radius={RADIUS}
        placeholder="Another subtitle"
        value={entryData.subTitle2}
        onChange={(event) => onChangeHandler(event, "subTitle2")}
        spellCheck={false}
      />
      <Textarea
        size={INPUT_SIZE}
        radius={RADIUS}
        rows={TEXTAREA_ROWS}
        placeholder="Add summary"
        value={entryData.summary}
        onChange={(event) => onChangeHandler(event, "summary")}
        spellCheck={false}
      />
    </div>
  );
};

export default FormBlockEntry;
