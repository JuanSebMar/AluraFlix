import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { IVideo } from "../common/interfaces/video.interfaces";

export const EditCard = () => {
  const [formValues, setFormValues] = useState<IVideo[]>([
    {
      title: "",
      description: "",
      url: "",
      category: "",
      image: "",
    },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Guardar en localStorage
    localStorage.setItem("videoData", JSON.stringify(formValues));
    console.log("Datos guardados en localStorage:", formValues);
    alert("Información guardada correctamente");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} maxWidth={400} mx="auto">
      <TextField
        label="Título del Video"
        name="title"
        placeholder="Escribe el título del video"
        value={formValues.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Descripción"
        name="description"
        placeholder="Describe brevemente el video"
        value={formValues.map((video) => video.description)}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="URL del Video"
        name="videoUrl"
        placeholder="Ingresa la URL del video"
        value={formValues.url}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Guardar Información
      </Button>
    </Box>
  );
};

// const VideoPlayer: React.FC = () => {
//   const videoData = JSON.parse(localStorage.getItem("videoData") || "{}");

//   if (!videoData.videoUrl) {
//     return <p>No hay datos disponibles. Por favor, completa el formulario.</p>;
//   }

//   return (
//     <Box textAlign="center" mt={4}>
//       <h2>{videoData.title}</h2>
//       <p>{videoData.description}</p>
//       <video width="80%" controls>
//         <source src={videoData.videoUrl} type="video/mp4" />
//         Tu navegador no soporta la reproducción de videos.
//       </video>
//     </Box>
//   );
// };
