import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IVideo } from "../common/interfaces/video.interfaces";
import { useVideoProvider } from "../hooks/useVideoProvider";

export const NewVideo = ({ open, close, videoToEdit }) => {
  const { handleSubmit, handleEdit } = useVideoProvider({ close, videoToEdit });

  const form = useForm<IVideo>({
    initialValues: videoToEdit || {
      id: "",
      category: "",
      title: "",
      url: "",
      image: "",
      description: "",
    },
  });

  return (
    <Modal
      opened={open}
      onClose={close}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (videoToEdit) {
            handleEdit(Number(videoToEdit.id), form.values);
          } else {
            handleSubmit(form.values);
          }
        }}>
        <TextInput
          label="Título del Video"
          name="title"
          placeholder="Escribe el título del video"
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Descripción"
          name="description"
          placeholder="Describe brevemente el video"
          {...form.getInputProps("description")}
        />
        <TextInput
          label="Categoria"
          name="category"
          placeholder="Escribe la categoría del video"
          {...form.getInputProps("category")}
        />
        <TextInput
          label="Imagen"
          name="image"
          placeholder="Escribe la URL de la imagen del video"
          {...form.getInputProps("image")}
        />
        <TextInput
          label="URL del Video"
          name="url"
          placeholder="Ingresa la URL del video"
          {...form.getInputProps("url")}
        />
        <Flex justify="center">
          <Button
            mt={10}
            type="submit"
            variant="contained"
            color="primary">
            {videoToEdit ? "Actualizar" : "Guardar Información"}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
