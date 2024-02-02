import { Card, Image, Group, Text } from "@mantine/core";
import "./cv-card.css";

const CVCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>ReactJS</Text>
      </Group>
    </Card>
  );
};

export default CVCard;