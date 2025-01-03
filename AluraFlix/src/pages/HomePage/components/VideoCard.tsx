import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 3,
      }}
    >
      {videos.map((video, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345, cursor: "pointer" }}
          onClick={() => handleOpen(video.url)}
        >
          <CardMedia
            component="img"
            height="140"
            image={video.image}
            alt={video.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {video.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Category: {video.category}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* Modal para reproducir video */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: 800,
            backgroundColor: "background.paper",
            p: 2,
            borderRadius: 2,
          }}
        >
          <iframe
            width="100%"
            height="450px"
            src={currentVideoUrl.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
};

export default VideoCard;
