const SessionContextProvider = ({ children }) => {
  // Existing states
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("User");
  const [fetchedTechnologies, setFetchedTechnologies] = useState([]);
  const [isTechnologiesLoading, setIsTechnologiesLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      setIsTechnologiesLoading(true);
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
        setIsTechnologiesLoading(false);
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
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
