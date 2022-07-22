//representa o usuário que irá ficar dentro do contexto

export interface IUser {
  email?: string;
  token?: string;
}

//interface do contexto que irá herdar/extender o IUser
export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

//interface para o contexto receber o filho
export interface IAuthProvider {
  children: JSX.Element;
}
