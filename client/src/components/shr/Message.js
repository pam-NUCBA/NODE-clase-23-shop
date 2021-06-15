import React from "react";
import { Alert } from "react-bootstrap";

//*children es el texto
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

//*por si no viene nada, seteamos un default
Message.defaultProps = {
  variant: "info",
};

export default Message;
