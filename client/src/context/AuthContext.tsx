import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";

import { AuthContext, AuthProviderProps, User } from "./types";

const Context = createContext<AuthContext | null>(null);
const SignupMethod = () =>
  useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
  });

export const useAuth = () => useContext(Context);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const signup = SignupMethod();

  return <Context.Provider value={{ signup }}>{children}</Context.Provider>;
};
