import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { ReactNode } from 'react';
import { DefaultGenerics, OwnUserResponse } from 'stream-chat';

export type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
  isSuccess: boolean;
  isValidUser: boolean;
  login: UseMutationResult<LoginResponseType, unknown, LoginCredentials>;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export type User = OwnUserResponse<DefaultGenerics>;

export type LoginCredentials = {
  id: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  user: OwnUserResponse<DefaultGenerics>;
};
