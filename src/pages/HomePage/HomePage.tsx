import { Container, Title } from "@mantine/core";
import { videos } from "../../common/constans/dataDisplay/data";
import VideoCard from "./components/VideoCard";

export const HomePage = () => {
  return (
    <Container fluid>
      <Title c={"#ffff"}>Alura flix</Title>
      <VideoCard videos={videos} />
    </Container>
  );
};
