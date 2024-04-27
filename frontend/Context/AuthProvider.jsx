import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const intitalAuthUser = localStorage.getItem("auth");
  const [authUser, setAuthUser] = useState(
    intitalAuthUser ? JSON.parse(intitalAuthUser) : null
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
