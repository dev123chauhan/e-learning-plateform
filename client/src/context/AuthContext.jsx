import { createContext, useState, useEffect, useContext } from "react";
import { authService } from "../api/services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const data = await authService.getUser();
          setUser(data);
        } catch (error) {
          console.error("Failed to fetch user", error);
          localStorage.removeItem("token");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);
    try {
      const data = await authService.getUser();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user", error);
      localStorage.removeItem("token");
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
