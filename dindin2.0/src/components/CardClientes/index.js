import "./style.css";
import CobrancaIcone from "../../assets/cobranca.svg";
import { useState, useEffect } from "react";
import api from "../../Service/api";
import { getItem } from "../../Utils/storage";

export default function CardClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    try {

      async function listarClientes() {
        const response = await api.get("/clientes", {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        });

        const responseData = await response.data.listaClientes;
        setClientes(responseData);

      }
      listarClientes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {clientes.map((cliente) => (
        <div className="clientes-usuarios" key={cliente.email}>
          <span>{cliente.nome}</span>
          <span>{cliente.cpf}</span>
          <span>{cliente.email}</span>
          <span>{cliente.telefone}</span>
          {cliente.status ?
            <div className="marcador-emdia">
              <span>Em dia</span>
            </div> :
            <div className="marcador-inadimplente">
              <span>Inadimplente</span>
            </div>}
          <div className="botao-cobranca">
            <img src={CobrancaIcone} alt="cobrança" />
            <span>Cobrança</span>
          </div>
        </div>
      ))}
    </div>

  );
}
