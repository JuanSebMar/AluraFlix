import {
  Box,
  Card,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { NewVideo } from "../../../components/NewVideo";
import { useVideoProvider } from "../../../hooks/useVideoProvider";

interface IVideo {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
  description: string;
}

interface VideoCardProps {
  videos: IVideo[];
}

const VideoCard: React.FC<VideoCardProps> = ({ videos }) => {
  const { handleDelete } = useVideoProvider({});
  const [opened, setModal] = useState(false);
  const [videoToEdit, setVideoToEdit] = useState<IVideo | null>(null);

  const getIframeSrc = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };
  useEffect(() => {}, [videoToEdit]);

  return (
    <>
      <NewVideo
        close={() => setModal(false)}
        open={opened}
        videoToEdit={videoToEdit}
      />
      <SimpleGrid cols={{ base: 2, lg: 2 }}>
        {videos?.map((video, index) => (
          <Card
            bg={"dark"}
            key={index}
            withBorder
            style={{ cursor: "pointer" }}>
            <Box>
              {video.url.includes("youtube.com") ? (
                <iframe
                  width="100%"
                  height="280px"
                  src={getIframeSrc(video.url)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}></iframe>
              ) : (
                <video
                  controls
                  style={{ width: "100%" }}
                  preload="metadata">
                  <source
                    src={video.url}
                    type="video/mp4"
                  />
                </video>
              )}
            </Box>
            <Box
              bg={"dark"}
              c={"#fff"}>
              <Text
                variant="h6"
                component="div">
                {video.title}
              </Text>
              <Text variant="body2">{video.description}</Text>
              <Group justify="end">
                <ThemeIcon>
                  <Tooltip label={"Editar video"}>
                    <IconEdit
                      onClick={() => {
                        setVideoToEdit(video);
                        setModal(true);
                      }}
                      size={20}
                    />
                  </Tooltip>
                </ThemeIcon>
                <ThemeIcon style={{ backgroundColor: "red" }}>
                  <Tooltip label={"Borrar video"}>
                    <IconTrash
                      onClick={() => handleDelete(Number(video.id))}
                      size={25}
                    />
                  </Tooltip>
                </ThemeIcon>
              </Group>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default VideoCard;
