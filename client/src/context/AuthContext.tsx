import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useMemo, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AuthContext, AuthProviderProps, User } from './types';

const Context = createContext<AuthContext | null>(null);
const SignupMethod = (navigation: (a: string) => void) =>
  useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
    onSuccess: () => {
      toast.success(
        'User has been created successfully. Please login to continue...!',
        {
          duration: 3000,
        }
      );
      setTimeout(() => {
        navigation('/login');
      }, 2000);
    },
  });

const LoginMethod = (navigation: (a: string) => void) =>
  useMutation({
    mutationFn: (userName: string) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, userName);
    },
    onSuccess: () => {
      toast.success('Login successful...!', {
        duration: 2000,
      });
      setTimeout(() => {
        navigation('/');
      }, 1000);
    },
  });

export const useAuth = () => useContext(Context) as AuthContext;

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const signup = SignupMethod(navigate);
  const login = LoginMethod(navigate);
  const { isSuccess } = signup;
  const isValidUser = login.isSuccess;

  return (
    <Context.Provider
      value={useMemo(
        () => ({ signup, isSuccess, isValidUser, login }),
        [signup, isSuccess, isValidUser, login]
      )}
    >
      {children}
    </Context.Provider>
  );
}
