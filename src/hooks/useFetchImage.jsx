import { useCallback, useEffect, useState } from "react";

export const useFetchImage = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const peticion = useCallback(async () => {
    const key = "client_id=nHO9HlChIrXOLZFzSkExu_dxPTcp6RwGrzo58kXBPAk";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${input}&${key}`;
    }

    setLoading(true);
    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setInput(e.target[0].value);
  };

  return [images, loading, handleSubmit];
};
