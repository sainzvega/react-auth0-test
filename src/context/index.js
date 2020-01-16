import React from "react";

// =========== API Client ===========
const authClient = {
  login() {
    return new Promise(resolve => {
      setTimeout(() => {
        debugger;
        resolve({
          user: {
            name: "Test User",
            role: "admin"
          },
          token: "fake-web-token"
        });
      }, 500);
    });
  },
  logout() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  register() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: {
            name: "Test User",
            role: "admin"
          },
          token: "fake-web-token"
        });
      }, 500);
    });
  }
};

// ========== Context and Hooks ==========
const AuthContext = React.createContext();
function useAuth() {
  const authContext = React.useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authContext;
}

const UserContext = React.createContext();
function useUser() {
  const userContext = React.useContext(UserContext);
  if (userContext === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return userContext;
}

// ========== Context Providers ==========
function AuthProvider(props) {
  const [data, setData] = React.useState(null);

  const login = form =>
    authClient.login(form).then(data => {
      setData(data);
      console.log("logged in");
      return true;
    });
  const logout = form =>
    authClient.logout(form).then(() => {
      setData(null);
      console.log("logged out");
      return true;
    });
  const register = form =>
    authClient.register(form).then(data => {
      setData(data);
      console.log("registered");
      return true;
    });

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
}

function UserProvider(props) {
  const { data: user } = useAuth();
  return <UserContext.Provider value={user} {...props} />;
}

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}

export { AppProviders as default, useAuth, useUser };
