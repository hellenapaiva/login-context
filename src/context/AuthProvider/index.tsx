import React, { createContext, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginResquest } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

//fica por volta da aplicação e controla o estado de quem fez login/logout
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  async function authenticate(email: string, password: string) {
    const response = await LoginResquest(email, password);

    const payload = { token: response.token, email };
    setUser(payload);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
