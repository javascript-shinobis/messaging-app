import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { ReactNode } from 'react';

export type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
  isSuccess: boolean;
  isValidUser: boolean;
  login: UseMutationResult<AxiosResponse, unknown, LoginCredentials>;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export type User = {
  id: string;
  name: string;
  image?: string;
  password: string;
};

export type LoginCredentials = {
  id: string;
  password: string;
};
