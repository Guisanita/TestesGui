import "./style.css";
import CardClientes from "../CardClientes"

export default function TabelaClientes() {

  return (
    <div className="tabela-clientes">
      <div className="clientes-titulos">
        <strong>Cliente</strong>
        <strong>CPF</strong>
        <strong>E-mail</strong>
        <strong>Telefone</strong>
        <strong>Status</strong>
        <strong>Criar Cobrança</strong>
      </div>
      <CardClientes />
    </div>
  );
}
