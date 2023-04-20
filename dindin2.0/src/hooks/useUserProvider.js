import { useState } from "react";

function useUserProvider() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return {
    nome,
    setNome,
    email,
    setEmail,
  };
}

export default useUserProvider;
