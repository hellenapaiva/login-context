//Facilitador para usar o contexto no componentes

import { useContext } from "react";
import { AuthContext } from ".";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
