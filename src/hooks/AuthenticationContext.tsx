import React, { createContext, useContext, useState, ReactNode } from "react";

import AuthService, { AuthenticationResponse } from "../services/authService";

const authService = new AuthService("/login");

const AuthorizationContext = createContext<
  | {
      user: AuthenticationResponse | null;
      login: (userData: string[]) => void;
      logout: () => void;
    }
  | undefined
>(undefined);

export const useUser = () => {
  const context = useContext(AuthorizationContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface AuthenticationProvider {
  children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthenticationProvider> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthenticationResponse | null>(null);

  const login = (userData: string[]) => {
    authService.loginAsync([userData[0], userData[1]]).then((res) => {
      setUser(res);
    });
  };

  const logout = () => {
    console.log(user?.userType.toString());
    authService.logout();
    setUser(null);
  };

  return (
    <AuthorizationContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
