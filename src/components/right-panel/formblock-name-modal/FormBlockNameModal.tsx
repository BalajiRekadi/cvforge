import { TextInput } from "@mantine/core";
import CVModal from "../../../shared/components/modal/Modal";
import { INPUT_SIZE, RADIUS } from "../../../constants";

const FormBlockNameModal = ({
  opened,
  onButtonClick,
  name,
  onNameChange,
  close,
  buttonText,
  title,
}) => {
  return (
    <CVModal
      opened={opened}
      title={title}
      close={close}
      onAddClick={onButtonClick}
      buttonText={buttonText}
    >
      <TextInput
        size={INPUT_SIZE}
        radius={RADIUS}
        placeholder="Title"
        value={name}
        onChange={onNameChange}
        spellCheck={false}
        data-autofocus
      />
    </CVModal>
  );
};

export default FormBlockNameModal;
