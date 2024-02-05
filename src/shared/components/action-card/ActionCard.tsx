import { Button, Card } from "@mantine/core";
import "./action-card.css";

const ActionCard = () => {
  return (
    <div className="action-card">
      <Card shadow="sm" padding="lg" radius="md">
        <Card.Section>
          <Button variant="light" size="lg" fullWidth={true}>
            + New
          </Button>
        </Card.Section>
      </Card>
    </div>
  );
};

export default ActionCard;
