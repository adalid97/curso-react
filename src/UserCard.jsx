import React, { Component }  from 'react';

export function UserCard(props) {
  console.log(props);
  props.saludo();
  return (
    <div>
      <p>Nombre titular tarjeta: {props.nombre}</p>
      <p>Fecha caducidad tarjeta: {props.fechaCaducidad}</p>
      <p>CVC tarjeta: {props.CVC}</p>
      <p>Dirección postal titular tarjeta:</p>
      <ul>
        <li>Calle: {props.direccion.calle}</li>
        <li>Nº: {props.direccion.num}</li>
        <li>Localidad: {props.direccion.localidad}</li>
        <li>Provincia: {props.direccion.provincia}</li>
      </ul>

      <p>Nombre titular tarjeta: {props.nombre}</p>
    </div>
  );
}
