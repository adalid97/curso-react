import PropTypes from "prop-types";
import React, { Component }  from 'react';

export function Boton({ text }) {
  console.log({ text });
  return <button>{text}</button>;
}

Boton.prototype = {
  text: PropTypes.string,
};
