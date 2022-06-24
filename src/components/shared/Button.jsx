import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisable }) {
  return (
    <button
      type={type}
      disable={isDisable.toString()}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisable: false,
};

Button.propTypes = {
  version: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
