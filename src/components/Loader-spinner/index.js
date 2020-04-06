import React from "react";
import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderSpinner = ({ size }) => {
  return (
    <div className="create-spinner">
      <Loader type="TailSpin" color="#69be41" height={size} width={size} />
    </div>
  );
};

export default LoaderSpinner;
