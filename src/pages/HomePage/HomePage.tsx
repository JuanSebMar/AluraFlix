import { Container } from "@mantine/core";
import { videos } from "../../common/constans/dataDisplay/data";
import VideoCard from "./components/VideoCard";

export const HomePage = () => {
  return (
    <Container fluid p={50}>
      <VideoCard videos={videos} />
    </Container>
  );
};
