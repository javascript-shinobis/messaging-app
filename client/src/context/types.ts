import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import { DefaultGenerics, OwnUserResponse, StreamChat } from 'stream-chat';

export type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
  isSuccess: boolean;
  isValidUser: boolean;
  login: UseMutationResult<LoginResponseType, unknown, LoginCredentials>;
  token?: string | undefined;
  user?: User;
  streamChat?: StreamChat;
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

export type LoginMethodType = {
  navigation: (a: string) => void;
  setToken: Dispatch<SetStateAction<string | undefined>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export type SignupUserType = {
  id: string;
  name: string;
  password: string;
  imageUrl: string;
};
