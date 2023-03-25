import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useMemo,
  useContext,
} from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import {
  AuthContext,
  AuthProviderProps,
  User,
  LoginCredentials,
} from './types';

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

const LoginMethod = ({
  navigation,
  setToken,
  setUser,
}: {
  navigation: (a: string) => void;
  setToken: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<User>>;
}) =>
  useMutation({
    mutationFn: (loginUser: LoginCredentials) => {
      return axios
        .post(`${import.meta.env.VITE_SERVER_URL}/login`, {
          id: loginUser.id,
          password: loginUser.password,
        })
        .then((response) => response.data as { token: string; user: User });
    },
    onSuccess: (data) => {
      // data comes from post /login response above

      toast.success('Login successful...!', {
        duration: 3000,
      });

      // set user creds in state
      setToken(data.token);
      setUser(data.user);

      // navigate to / route
      setTimeout(() => {
        navigation('/');
      }, 1000);
    },

    onError: () => {
      toast.error('Please Provide Valid login credentials!', {
        duration: 3000,
      });
    },
  });

export const useAuth = () => useContext(Context) as AuthContext;

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const signup = SignupMethod(navigate);
  const login = LoginMethod({ navigation: navigate, setToken, setUser });
  const { isSuccess } = signup;
  const isValidUser = login.isSuccess;

  return (
    <Context.Provider
      value={useMemo(
        () => ({ signup, isSuccess, isValidUser, login, token, user }),
        [signup, isSuccess, isValidUser, login, token, user]
      )}
    >
      {children}
    </Context.Provider>
  );
}
