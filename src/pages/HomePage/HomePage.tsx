import { Container } from "@mantine/core";
import { useVideoProvider } from "../../hooks/useVideoProvider";
import VideoCard from "./components/VideoCard";

export const HomePage = () => {
  const { video } = useVideoProvider({});

  return (
    <Container
      fluid
      p={50}>
      <VideoCard videos={video} />
    </Container>
  );
};
