/* export function Saludo3(props) {
  console.log(props);
  return (
    <div>
      <h1>Esto es un componente</h1>
      <p>{props.title}</p>
    </div>
  );
} */

import React, { Component }  from 'react';

export function Saludo3({ title, name = "User" }) {
  console.log({ title });
  return (
    <div>
      <h1>
        {title}, {name}
      </h1>
      <p>jejeje</p>
    </div>
  );
}

export function User() {
  return <h1>Esto es un usuario</h1>;
}
