import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("User");
  const [fetchedTechnologies, setFetchedTechnologies] = useState([]);
  const [isTechnologiesLoading, setIsTechnologiesLoading] = useState(true); // New state

  const navigate = useNavigate();

  const removeToken = () => {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("userId");
  };

  const verifyToken = async (tokenToVerify) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${tokenToVerify}`,
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setToken(tokenToVerify);
        setUserId(data.userId);
        setIsAuthenticated(true);
        setUserRole(data.role);
      } else {
        removeToken();
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error in verifyToken:", error);
      removeToken();
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem("authToken");
    if (localToken) {
      verifyToken(localToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("authToken", token);
      verifyToken(token);
    }
  }, [token]);

  const handleLogout = () => {
    removeToken();
    setToken(null);
    setUserId(null);
    setIsAuthenticated(false);
    navigate("/");
  };
  useEffect(() => {
    const fetchTechnologies = async () => {
      setIsTechnologiesLoading(true); // Start loading
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/technologies`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFetchedTechnologies(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setIsTechnologiesLoading(false); // Finish loading
      }
    };

    fetchTechnologies();
  }, []);
  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        token,
        userId,
        userRole,
        setToken,
        handleLogout,
        fetchedTechnologies,
        isTechnologiesLoading,
        setFetchedTechnologies,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
