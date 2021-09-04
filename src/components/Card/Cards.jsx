import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const peticion = useCallback(async () => {
    const key = "client_id=nHO9HlChIrXOLZFzSkExu_dxPTcp6RwGrzo58kXBPAk";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${input}&${key}`;
    }

    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setInput(e.target[0].value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Buscar: <input type="text" name="inputText" />
        </label>
      </form>
      <hr />
      {images.length > 0 &&
        images.map((item) => {
          return <Card key={item.id} img={item.urls.regular} />;
        })}
    </>
  );
};

export default Cards;
