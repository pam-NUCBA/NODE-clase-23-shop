import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <Spinner animation="grow" role="status" className="spinner" variant="info">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;
