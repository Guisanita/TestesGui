import { useState } from "react";
import BuscaIcone from "../../assets/busca.svg";
import ClienteIcone from "../../assets/cliente-icone.svg";
import FiltroIcone from "../../assets/filtro.svg";
import Cabecalho from "../../components/Cabecalho";
import CadastrarClienteModal from "../../components/CadastrarClienteModal";
import EditarCadastroModal from "../../components/EditarCadastroModal";
import MenuLateral from "../../components/MenuLateral";
import Notificacao from "../../components/Notificacao";
import TabelaClientes from "../../components/TabelaClientes";
import "./style.css";

export default function Clientes() {
  const [modalCadastrarCliente, setModalCadastrarCliente] = useState(false);
  const [modalEditarCadastro, setModalEditarCadastro] = useState(false);

  return (
    <div className="container">
      {modalEditarCadastro && (
        <EditarCadastroModal setModalEditarCadastro={setModalEditarCadastro} />
      )}
      {modalCadastrarCliente && (
        <CadastrarClienteModal
          setModalCadastrarCliente={setModalCadastrarCliente}
        />
      )}
      <Notificacao />
      <MenuLateral />
      <div className="principal">
        <Cabecalho setModalEditarCadastro={setModalEditarCadastro} />
        <div className="conteudo-cabecalho">
          <div className="cabecalho-clientes">
            <div className="cabecalho-esquerda">
              <img src={ClienteIcone} alt="cliente icone" />
              <h1>Clientes</h1>
            </div>
            <div className="cabecalho-direita">
              <button
                type="button"
                onClick={() => setModalCadastrarCliente(true)}
              >
                + Adicionar Cliente
              </button>
              <img
                src={FiltroIcone}
                alt="filtro"
                className="cabecalho-filtro"
              />
              <div className="cabecalho-pesquisa">
                <div className="pesquisa-blur"></div>
                <input type="text" placeholder="Pesquisa" />
                <img src={BuscaIcone} alt="pesquisar" />
              </div>
            </div>
          </div>
          <TabelaClientes />
        </div>
      </div>
    </div>
  );
}
