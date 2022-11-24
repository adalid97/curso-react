import React from "react";
import ReactDom from "react-dom/client";
import { Saludo3, User } from "./Saludo3";
import Product, { Navbar } from "./Product";
import { UserCard } from "./UserCard";
import { Boton } from "./Boton";

const root = ReactDom.createRoot(document.getElementById("root"));

function Saludar() {
  return <h1>Hola</h1>;
}

/* function Componente() {
    return <div>
        <h1>Esto es un componente</h1>
        <p>jejeje</p>
    </div>
} */

/* root.render(
    <div>
        {Saludar()}
        <Componente></Componente>
        <Componente />
    </div>
) */

function Saludo1() {
  const nombre = "José Ángel";
  const casado = false;
  /*  var estado = "";
    if (casado) {
        estado = "casado"
    } else {
        estado = "soltero"
    } 
    return <h1>Hola, me llamo {nombre} y estoy {estado}.</h1> */
  return (
    <h1>
      Hola, me llamo {nombre} y estoy {casado ? "casado 😇" : "soltero 😉"}.
    </h1>
  );
}

export function Saludo2() {
  const user = {
    nombre: "José Ángel",
    apellidos: "Adalid López",
  };

  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <h1>{user.nombre}</h1>
      <h3>{user.apellidos}</h3>
    </>
  );
}

root.render(
  <>
    <UserCard
      nombre="José Ángel Adalid"
      valor="300.2"
      CVC="365"
      fechaCaducidad="12/27"
      direccion={{
        calle: "Córdoba",
        num: 9,
        localidad: "Fuentes de Andalucía",
        provincia: "Sevilla",
      }}
      saludo={function () {
        alert("Hola");
      }}
    />
    <hr/>
    <UserCard
      nombre="Nabil Fekir"
      valor="502"
      CVC="123"
      fechaCaducidad="11/27"
      direccion={{
        calle: "Ancha",
        num: 9,
        localidad: "Castilleja de la cuesta",
        provincia: "Sevilla",
      }}
      saludo={function () {
        alert("Hola");
      }}
    />
     <hr/>
    <Boton text='Pagar'/>
    <Boton text='Ir'/>
    <Boton text='125'/>
    {/* <Saludo3 title="Hola" name="José Ángel" />
    <Saludo3 title="Hola" name="Laura" />
    <Saludo3 title="Hola" name="Mar" />
    <Saludo3 title="Hola" name="Fekir" />
    <Saludo3 title="Hola" /> */}
    {/* <User />
    <Product/>
    <Navbar/> */}
  </>
);
