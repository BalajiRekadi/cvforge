import { Button, Modal } from "@mantine/core";
import "./modal.css";

const CVModal = ({ opened, close, title, onAddClick, children }) => {
  return (
    <Modal
      className="modal"
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered={true}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <h3 className="header">{title}</h3>
      {children}
      <Button
        variant="light"
        color="yellow"
        className={"add-button"}
        onClick={onAddClick}
        fullWidth={false}
      >
        Add
      </Button>
    </Modal>
  );
};

export default CVModal;
