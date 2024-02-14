import { Text, Image, Paper, Button } from "@mantine/core";
import "./cv-card.css";
import resume from "../../../assets/resume.jpg";

const CVCard = ({ name, isActive = false, isNew = false }) => {
  return (
    <Paper shadow="xs" withBorder className="cv-card" radius={"sm"}>
      {!isNew && (
        <Image
          className={isActive ? "bkgd-img active" : "bkgd-img"}
          radius={"sm"}
          src={resume}
          alt="Resume"
        />
      )}
      {isNew && (
        <Button className="new-button new-text" variant="light">
          + New
        </Button>
      )}
      {!isNew && <Text className="text">{name}</Text>}
    </Paper>
  );
};

export default CVCard;
