import { createContext, useContext, useEffect, useState } from "react";
import { videos } from "../common/constans/dataDisplay/data";

const VideoContext = createContext<any>({});

export const VideoProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    if (search.length > 1) {
      const filterProducts = videos.filter((product) =>
        product.title.toLocaleLowerCase().includes(search)
      );
      setFilteredVideos(filterProducts);
    } else {
      setFilteredVideos(videos);
    }
  }, [search]);

  return (
    <VideoContext.Provider
      value={{
        videos,
        search,
        setSearch,
        filteredVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  return context;
};
