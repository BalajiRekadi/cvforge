import { Button, Card } from "@mantine/core";
import "./action-card.css";

const ActionCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Card.Section>
        <Button variant="light" size="lg" fullWidth={true}>
          + New
        </Button>
      </Card.Section>
    </Card>
  );
};

export default ActionCard;
