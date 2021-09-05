import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="w-75">
        Buscar: <input type="text" className="w-75" name="inputText" />{" "}
        <button type="submit" className="btn btn-warning mx-2">
          <span className="material-icons">Buscar</span>
        </button>
      </label>
    </form>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
