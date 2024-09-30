import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  Paper,
  Avatar,
  Text,
  Button,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(400);

export function AboutDashboard() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Paper
          radius="md"
          withBorder
          p="lg"
          bg="var(--mantine-color-body)"
          style={{ height: PRIMARY_COL_HEIGHT }}
        >
          <Avatar
            src="https://i.imgur.com/0qdor4s.jpeg"
            size={200}
            radius={200}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Maria Magdalena Neu{" "}
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Communicator • Full-Stack Dev
          </Text>

          <Button variant="default" fullWidth mt="md">
            About me{" "}
          </Button>
        </Paper>{" "}
        <Grid gutter="md">
          <Grid.Col>
            {/*             <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            /> */}
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default AboutDashboard;
