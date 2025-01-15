import { useEffect, useState } from "react";
import { VIDEO_DATA } from "../common/constans/dataDisplay/data";
import { IVideo } from "../common/interfaces/video.interfaces";

export const useVideoProvider = ({ close }: { close?: any }) => {
  const [search, setSearch] = useState("");
  const [video, setVideo] = useState<IVideo[]>();

  const handleSubmit = (values: IVideo) => {
    let currentData: IVideo[] = [];
    const storedData = localStorage.getItem("videoData");

    if (storedData) {
      try {
        currentData = JSON.parse(storedData);
        if (!Array.isArray(currentData)) {
          throw new Error("Invalid data in localStorage");
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        currentData = [];
      }
    }

    const newId =
      currentData.length > 0
        ? Math.max(...currentData.map((video) => Number(video.id) || 0)) + 1
        : 1;

    const newVideo = { ...values, id: newId.toString() };
    currentData.push(newVideo);

    localStorage.setItem("videoData", JSON.stringify(currentData));
    console.log("Video creado:", newVideo);
    close && close();
  };

  const handleEdit = (id: number, updatedValues: Partial<IVideo>) => {
    let currentData: IVideo[] = [];
    const storedData = localStorage.getItem("videoData");
    if (storedData) {
      try {
        currentData = JSON.parse(storedData);
        if (!Array.isArray(currentData)) {
          throw new Error("Invalid data in localStorage");
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        currentData = [];
      }
    }

    const videoIndex = currentData.findIndex(
      (video) => Number(video.id) === id
    );
    if (videoIndex !== -1) {
      currentData[videoIndex] = {
        ...currentData[videoIndex],
        ...updatedValues,
      };
      localStorage.setItem("videoData", JSON.stringify(currentData));
      console.log("Video editado:", currentData[videoIndex]);
    } else {
      console.error(`No se encontró un video con el ID: ${id}`);
    }
    close && close();
  };

  const handleDelete = (id: number) => {
    let currentData: IVideo[] = [];
    const storedData = localStorage.getItem("videoData");
    if (storedData) {
      try {
        currentData = JSON.parse(storedData);
        if (!Array.isArray(currentData)) {
          throw new Error("Invalid data in localStorage");
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        currentData = [];
      }
    }

    const updatedData = currentData.filter((video) => Number(video.id) !== id);

    if (updatedData.length === currentData.length) {
      console.error(`No se encontró un video con el ID: ${id}`);
      return;
    }

    localStorage.setItem("videoData", JSON.stringify(updatedData));
    console.log(`Video con ID: ${id} eliminado.`);
  };

  useEffect(() => {
    const existingData = localStorage.getItem("videoData");
    if (!existingData) {
      localStorage.setItem("videoData", JSON.stringify(VIDEO_DATA));
    }
    const newData = localStorage.getItem("videoData");
    if (newData) {
      try {
        const fixData = JSON.parse(newData) as IVideo[];
        setVideo(fixData);
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    }
  }, [video]);

  return {
    video,
    search,
    setSearch,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
};
