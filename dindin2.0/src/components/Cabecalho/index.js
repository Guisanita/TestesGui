import { useState } from "react";
import EditarIcone from "../../assets/editar.svg";
import SairIcone from "../../assets/sair.svg";
import Seta from "../../assets/seta.svg";
import UsuarioIcone from "../../assets/usuario-icone.svg";
import "./style.css";

const handleLogin = () => {
  window.location.href = "/login";
};

export default function Cabecalho({ setModalEditarCadastro }) {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);

  // const arrayNome = localStorage.userName.split(" ");

  // const iniciaisNome =
  //   arrayNome[0].slice(0, 1).toUpperCase() +
  //   arrayNome[1].slice(0, 1).toUpperCase();

  return (
    <div className="principal-titulo">
      <h1>Resumo das Cobranças</h1>
      <div
        className="principal-usuario"
        onClick={() => setMostrarPopUp(!mostrarPopUp)}
      >
        <div className="usuario-icone">
          <img src={UsuarioIcone} alt="icone usuario" />
          <strong>{localStorage.userName[0]}</strong>
        </div>
        <span>{localStorage.userName}</span>
        <div className="usuario-seta">
          <img src={Seta} alt="seta" />
          {mostrarPopUp === true && (
            <div className="usuario-popup">
              <div onClick={() => setModalEditarCadastro(true)}>
                <img src={EditarIcone} />
                <span>Editar</span>
              </div>
              <div onClick={() => handleLogin()}>
                <img src={SairIcone} />
                <span>Sair</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
