import { ReactNode } from "react";

export type AuthContext = {};

export type AuthProviderProps = {
  children: ReactNode;
};

export type User = {
  id: string;
  name: string;
  image?: string;
};
