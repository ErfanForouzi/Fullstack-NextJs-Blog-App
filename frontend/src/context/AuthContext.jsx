"use client";
import { getUserApi, logoutApi, signInApi, signUpApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};
const authReducer = (state, action) => {
 
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "signin": {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    }
    case "logout": {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    }
    case "signup": {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    }
    case "rejected": {
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoading: false,
      };
    }
    case "user/loaded": {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    }
    default:
      return initialState;
  }
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );


  const router = useRouter();

  const signin = async (values) => {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await signInApi(values);
      dispatch({ type: "signin", payload: response.user });
      toast.success(response.message);
      router.back();
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };
  const logout = async () => {
    dispatch({ type: "loading", payload: true });
    try {
       await logoutApi();
      dispatch({ type: "logout", payload: false });
      toast.success("کاربر با موفقیت از حساب کاربری خارج شد");
      router.push('/');
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };
  const signup = async (values) => {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await signUpApi(values);
      dispatch({ type: "signup", payload: response.user });
      toast.success(response.message);
      router.push("/profile");
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };

  const getUser = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      await new Promise((resolve) => setTimeout(() => {resolve()}, 2000));
      const response = await getUserApi();
      dispatch({ type: "user/loaded", payload: response.user });
    } catch (err) {
      const errorMsg = err?.response?.data?.message || "sdsdss";
      dispatch({ type: "rejected", payload: errorMsg });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };

  useEffect(() => {
    async function getUserData() {
      await getUser();
    }
    getUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        user,
        isAuthenticated,
        isLoading,
        error,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("context not found");
  return context;
};

export default AuthProvider;
