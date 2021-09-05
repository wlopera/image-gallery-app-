import React from "react";
import { useFetchImage } from "../../hooks/useFetchImage";
import FormImg from "../FormImg";
import Loading from "../Loading";
import Card from "./Card";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImage();
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
