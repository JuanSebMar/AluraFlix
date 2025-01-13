import { Button, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export const NewVideo = ({ open, close }) => {
  const form = useForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Guardar en localStorage
    localStorage.setItem("videoData", JSON.stringify(form));
    console.log("Datos guardados en localStorage:", form);
    alert("Información guardada correctamente");
  };

  return (
    <Modal opened={open} onClose={close}>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Título del Video"
          name="title"
          placeholder="Escribe el título del video"
        />
        <TextInput
          label="Descripción"
          name="description"
          placeholder="Describe brevemente el video"
        />
        <TextInput
          label="Categoria"
          name="description"
          placeholder="Describe brevemente el video"
        />
        <TextInput
          label="URL del Video"
          name="videoUrl"
          placeholder="Ingresa la URL del video"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Guardar Información
        </Button>
      </form>
    </Modal>
  );
};
