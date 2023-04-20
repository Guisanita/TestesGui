import { useEffect, useState } from "react";
import FecharIcone from "../../assets/fechar.svg";
import "../../styles/modal-style.css";
import SucessoIcone from "../../assets/sucesso-icone.svg";
import OlhoIconeFechado from "../../assets/olho-fechado.svg";

export default function CadastrarClienteModal({ setModalEditarCadastro }) {
  const [cadastroRealizado, setCadastroRealizado] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    CPF: "",
    telefone: "",
    novaSenha: "",
    confirmarSenha: "",
  });

  function mudarValoresDoInput({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  useEffect(() => {
    if (cadastroRealizado) {
      setTimeout(() => {
        setCadastroRealizado(false);
        setModalEditarCadastro(false);
      }, 1500);
    }
  });

  return (
    <div className="container-modal">
      {cadastroRealizado ? (
        <div className="cadastro-sucesso">
          <img src={SucessoIcone} alt="sucesso icone" />
          <span>Cadastro alterado com sucesso!</span>
        </div>
      ) : (
        <div className="modal editar-cadastro">
          <div className="modal-titulo editar-cadastro-titulo ">
            <img
              src={FecharIcone}
              alt="fechar"
              onClick={() => setModalEditarCadastro(false)}
              className="modal-fechar-icone"
            />
            <h1>Editar seu cadastro</h1>
          </div>
          <form className="form-editar-cadastro">
            <label>Nome*</label>
            <input
              className="erro-input"
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              value={form.nome}
              onChange={mudarValoresDoInput}
            />
            <label>E-mail*</label>
            <input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={mudarValoresDoInput}
            />
            <div className="form-inputs-juntos">
              <div style={{ width: "178px", marginRight: "24px" }}>
                <label>CPF</label>
                <input
                  style={{ width: "178px" }}
                  name="CPF"
                  type="number"
                  placeholder="Digite seu CPF"
                  value={form.CPF}
                  onChange={mudarValoresDoInput}
                />
              </div>
              <div style={{ width: "178px" }}>
                <label>Telefone</label>
                <input
                  style={{ width: "178px" }}
                  name="telefone"
                  type="number"
                  placeholder="Digite seu telefone"
                  value={form.telefone}
                  onChange={mudarValoresDoInput}
                />
              </div>
            </div>
            <label>Nova Senha*</label>
            <div className="senha-icone">
              <input
                name="novaSenha"
                type="password"
                value={form.novaSenha}
                onChange={mudarValoresDoInput}
              />
              <img src={OlhoIconeFechado} />
            </div>
            <label>Confirmar Senha*</label>
            <div className="senha-icone">
              <input
                name="confirmarSenha"
                type="password"
                value={form.confirmarSenha}
                onChange={mudarValoresDoInput}
              />
              <img src={OlhoIconeFechado} alt="senha icone" />
            </div>
          </form>
          <button type="button" onClick={() => setCadastroRealizado(true)}>
            Aplicar
          </button>
        </div>
      )}
    </div>
  );
}
