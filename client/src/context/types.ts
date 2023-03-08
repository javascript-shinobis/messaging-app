import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
};

export type AuthProviderProps = {
  children: ReactNode;
};
