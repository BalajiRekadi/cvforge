import { Button, Modal } from "@mantine/core";
import classes from "./modal.module.css";

const CVModal = ({ opened, close, title, onAddClick, children }) => {
  return (
    <Modal
      className={classes["modal"]}
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered={true}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <div className={classes["body"]}>
        <h3 className={classes["header"]}>{title}</h3>
        {children}
        <Button
          variant="light"
          color="yellow"
          className={classes["add-button"]}
          onClick={onAddClick}
          fullWidth={false}
        >
          Add
        </Button>
      </div>
    </Modal>
  );
};

export default CVModal;
