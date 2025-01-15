import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IVideo } from "../common/interfaces/video.interfaces";
import { useVideoProvider } from "../hooks/useVideoProvider";

export const NewVideo = ({ open, close }) => {
  const { handleSubmit } = useVideoProvider({ close });

  const form = useForm<IVideo>({
    initialValues: {
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
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
          name="category"
          placeholder="Escribe la categoría del video"
          {...form.getInputProps("image")}
        />
        <TextInput
          label="URL del Video"
          name="url"
          placeholder="Ingresa la URL del video"
          {...form.getInputProps("url")}
        />
        <Flex justify={"center"}>
          <Button
            mt={10}
            type="submit"
            variant="contained"
            color="primary">
            Guardar Información
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
