import { Box, Modal, Text } from "@mantine/core";
import { IVideo } from "../common/interfaces/video.interfaces";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  videos: IVideo[];
}
export const FilterVideoModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  videos,
}) => {
  return (
    <Modal opened={open} onClose={onClose}>
      <Box
        style={{
          justifySelf: "center",
          width: 500,
          maxHeight: "80vh",
          bgcolor: "background.paper",
          boxShadow: "24",
          mt: 7,
          borderRadius: "10px",
          p: 2,
          overflowY: "scroll",
        }}
      >
        <Text id="modal-title" variant="h6" component="h2">
          Productos Filtrados
        </Text>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {/* {videos?.map((product, index) => (
            <List key={index}>
              <ListItem>
                <img
                  style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    padding: "5px",
                  }}
                  src={product.description}
                />
                {product.description}
              </ListItem>
              <Divider />
            </List>
          ))} */}
        </Box>
      </Box>
    </Modal>
  );
};
