import { useState } from "react";
import "./style.css";
import api from "../../Service/api";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../Utils/storage";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("esta aqui");
    try {
      if (!email || !senha) {
        setErro(true);
        return;
      }

      const { data } = await api.post("/login", {
        email,
        senha,
      });

      setItem("token", data.token);
      setItem("userName", data.usuario.nome);
      setItem("userId", data.usuario.id);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="lateral">
        <h1>Gerencie todos os pagamentos da sua empresa em um só lugar.</h1>
      </div>

      <div className="formulario-login">
        <h2>Faça seu login!</h2>

        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <div className="senha-login">
            <label>Senha</label>
            <a href="">Esqueceu a senha?</a>
          </div>

          <input
            name="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        {erro && <span>Os campos são obrigatórios</span>}
        <p>
          Ainda não possui uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
