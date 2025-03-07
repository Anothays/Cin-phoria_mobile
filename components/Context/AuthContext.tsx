import { UserType } from "@/types/UserType";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const TOKEN_KEY = "jwt";
const USER_INFOS = "user_infos";

interface AuthState {
  token: string | null;
  authenticated: boolean | null;
  user: UserType | null;
}

interface AuthProps {
  authState?: AuthState;
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: null,
    user: null,
  });

  useEffect(() => {
    const loadTokenAndUser = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const user = await SecureStore.getItemAsync(USER_INFOS);
      if (token && user) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({ token, authenticated: true, user: JSON.parse(user) });
      }
    };
    loadTokenAndUser();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/users`, {
        email,
        password,
      });
    } catch (error) {
      return { error: true, message: error };
    }
  };
  const login = async (email: string, password: string) => {
    try {
      axios.defaults.headers.common["Content-Type"] = "application/json";
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/login_check`,
        { username: email, password },
      );

      // Set auth state
      setAuthState({
        token: response.data.token,
        authenticated: true,
        user: response.data.user,
      });

      // Set token into HTTP headers
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.token}`;

      // store the token
      await SecureStore.setItemAsync(TOKEN_KEY, response.data.token);
      await SecureStore.setItemAsync(
        USER_INFOS,
        JSON.stringify(response.data.user),
      );

      return response;
    } catch (error) {
      return { error: true, message: error };
    }
  };
  const logout = async () => {
    // Delete token and userinfos from asyncStorage
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(USER_INFOS);

    // update HTTP headers
    axios.defaults.headers.common["Authorization"] = "";

    // Reset auth state
    setAuthState({
      token: null,
      authenticated: false,
      user: null,
    });
  };
  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
