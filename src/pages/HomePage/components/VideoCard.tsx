import { Card, SimpleGrid, Text } from "@mantine/core";
import { useState } from "react";

interface IVideo {
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
  const [open, setOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const handleOpen = (url: string) => {
    setCurrentVideoUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentVideoUrl("");
  };

  const getIframeSrc = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  return (
    <SimpleGrid cols={{ base: 1, lg: 5 }}>
      {videos.map((video, index) => (
        <Card
          bg={"dark"}
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => handleOpen(video.url)}
        >
          <Card.Section>
            {video.url.includes("youtube.com") ? (
              <iframe
                width="100%"
                height="200px"
                src={getIframeSrc(video.url)}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "8px" }}
              ></iframe>
            ) : (
              <video
                controls
                style={{ width: "100%", borderRadius: "8px" }}
                preload="metadata"
              >
                <source src={video.url} type="video/mp4" />
              </video>
            )}
          </Card.Section>
          <Card.Section bg={"dark"} c={"#fff"}>
            <Text variant="h6" component="div">
              {video.title}
            </Text>
            <Text variant="body2">{video.description}</Text>
            <Text variant="caption">Category: {video.category}</Text>
          </Card.Section>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default VideoCard;

{
  /* <Modal
        opened={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: "80%",
            maxWidth: 800,
            backgroundColor: "background.paper",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          {currentVideoUrl.includes("youtube.com") ? (
            <iframe
              width="100%"
              height="450px"
              src={getIframeSrc(currentVideoUrl)}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              controls
              style={{ width: "100%" }}
              preload="metadata"
              src={currentVideoUrl}
            ></video>
          )}
        </Box>
      </Modal> */
}
