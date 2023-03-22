import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext, AuthProviderProps, User } from "./types";

const Context = createContext<AuthContext | null>(null);
const SignupMethod = (navigation: (a: string) => void) =>
  useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
    onSuccess: () => {
      toast.success(
        "User has been created successfully. Please login to continue...!",
        {
          duration: 3000,
        }
      );
      setTimeout(() => {
        navigation("/login");
      }, 2000);
    },
  });

export const useAuth = () => useContext(Context) as AuthContext;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const signup = SignupMethod(navigate);
  const isSuccess = signup.isSuccess;

  // if(isSuccess){
  //
  // }

  // console.log(signup)

  return (
    <Context.Provider value={{ signup, isSuccess }}>
      {children}
    </Context.Provider>
  );
};
