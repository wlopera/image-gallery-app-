import React, { useCallback, useEffect, useState } from "react";
import FormImg from "../FormImg";
import Loading from "../Loading";
import Card from "./Card";

const Cards = () => {
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
  return (
    <div className="text-center">
      <FormImg handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      <div className="row">
        {images.length > 0 &&
          images.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Card img={item.urls.regular} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
