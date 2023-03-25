// eslint-disable-next-line import/no-extraneous-dependencies
import isEmpty from 'lodash/isEmpty';
import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useMemo,
  useContext,
  useEffect,
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
  LoginResponseType,
} from './types';
import { StreamChat } from 'stream-chat';

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
  setToken: Dispatch<SetStateAction<string | undefined>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}) =>
  useMutation({
    mutationFn: (loginUser: LoginCredentials) => {
      return axios
        .post(`${import.meta.env.VITE_SERVER_URL}/login`, {
          id: loginUser.id,
          password: loginUser.password,
        })
        .then((response) => response.data as LoginResponseType);
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
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const [streamChat, setStreamChat] = useState<StreamChat>();
  const navigate = useNavigate();
  const signup = SignupMethod(navigate);
  const login = LoginMethod({ navigation: navigate, setToken, setUser });
  const { isSuccess } = signup;
  const isValidUser = login.isSuccess;

  useEffect(() => {
    // login the user to stream
    if (!token || isEmpty(user)) return;

    // create stream chat instance
    const chat = new StreamChat(import.meta.env.VITE_STREAM_API_KEY!);

    let isInterrupted = false;
    // connect the user to stream chat server
    const connectPromise = chat.connectUser(user as User, token).then(() => {
      if (isInterrupted) return;
    });
  }, [token, user]);

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
