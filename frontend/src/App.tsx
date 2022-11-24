import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const title: string = "Title";
  const [show, setShow] = useState(false);

  const comentario = [
    { id: 1, title: "titulo1", texto: "Texto do comentario 1" },
    { id: 2, title: "titulo2", texto: "Texto do comentario 2" },
    { id: 3, title: "titulo3", texto: "Texto do comentario 3" },
    { id: 4, title: "titulo4", texto: "Texto do comentario 4" },
    { id: 5, title: "titulo5", texto: "Texto do comentario 5" },
  ];

  return (
    <>
      <h1> {title}</h1>
      <p> Posts </p>
      <h2> {5 * 5} </h2>
      <span>{title.toUpperCase()}</span>

      <ul>
        {comentario.map((com, index) => (
          <li key={com.id}>
            <h1> {com.title}</h1>
            <p> {com.texto}</p>
          </li>
        ))}
      </ul>

      {show && (<p> conteudo privado</p>)}

      <button onClick={() => setShow(true)}> Mostrar</button>
      
    </>
  );
}

export default App;
