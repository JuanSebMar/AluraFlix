import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { FilterVideoModal } from "../../../components/FilterVideoModal";
import { useVideoProvider } from "../../../hooks/useVideoProvider";

const SearchBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { search, setSearch, video } = useVideoProvider({});

  const onInputChange = ({ target }: any) => {
    const { value } = target;
    setSearch(value);
  };
  const handleCloseModal = () => setModalOpen(false);
  const handleOpenModal = () => setModalOpen(true);

  useEffect(() => {
    if (search?.length >= 3) handleOpenModal();
  }, [search]);

  return (
    <>
      <Autocomplete
        w={300}
        rightSection={<IconSearch />}
        value={search}
        onChange={onInputChange}
      />
      <FilterVideoModal
        open={modalOpen}
        onClose={handleCloseModal}
        videos={video}
      />
    </>
  );
};

export default SearchBar;
