import React from "react"
import { AuthAPI } from "./auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(window.localStorage.getItem("user"));
  let [rol, setRol] = React.useState(window.localStorage.getItem("rol"))
  let [id, setId] = React.useState(window.localStorage.getItem("id"))
  let [userType, setUserType] = React.useState(window.localStorage.getItem("userType"))

  let signin = (data, callback) => {
    return AuthAPI.signin(data, (res) => {
      // console.log(res);
      const {role, email, status, code, id, userType, token} = res
      if (status){
        setUser(email);
        setRol(role);
        setId(id);
        setUserType(userType)
        window.localStorage.setItem("user", email)
        window.localStorage.setItem("rol", role)
        window.localStorage.setItem("id", id)
        window.localStorage.setItem("userType", userType)
        window.localStorage.setItem("token", token)
        callback({state: true, rol: role});
      } else {
        callback({state: status, error: code})
      }
    });
  };

  let signup = (data, callback) => {
    return AuthAPI.signup(data, (res) => {
      const {role, email, status, code, id, userType, token} = res
      if (status){
        setUser(email);
        setRol(role);
        setId(id);
        setUserType(userType)
        window.localStorage.setItem("user", email)
        window.localStorage.setItem("rol", role)
        window.localStorage.setItem("id", id)
        window.localStorage.setItem("token", token)
        callback({state: true, rol: role});
      } else {
        callback({state: status, error: code})
      }
    });
  };

  let signout = (callback) => {
    return AuthAPI.signout(() => {
      setUser(null);
      setRol(null);
      setId(null);
      setUserType(null);
      window.localStorage.removeItem("user")
      window.localStorage.removeItem("rol")
      window.localStorage.removeItem("id")
      window.localStorage.removeItem("userType");
      window.localStorage.removeItem("token")
      callback();
    });
  };

  let value = { data: {user, rol, id, userType}, signin, signup, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}