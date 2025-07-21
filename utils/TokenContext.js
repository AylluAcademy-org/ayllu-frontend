import React, { useContext, useState } from 'react';

const TokenContext = React.createContext();

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children, initialToken ,initialUserName ,initialUserID }) => {
  const [token, setToken] = useState(initialToken || null);
  const [userName, setUserName] = useState(initialUserName || null);  
  const [userID, setUserID] = useState(initialUserID || null);
  const loggedIn = token !== null;


  const login = (token,userName,userID) => {
    setToken(token);
    setUserName(userName);
    setUserID(userID);
    localStorage.setItem('token', token); // Guardar en localStorage
    localStorage.setItem('userName', userName); // Guardar en localStorage
    localStorage.setItem('userID', userID); // Guardar en localStorage
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Remover de localStorage al cerrar sesión
    localStorage.removeItem('userName'); // Remover de localStorage al cerrar sesión
    localStorage.removeItem('userId'); // Remover de localStorage al cerrar sesión
    console.log('logout-------------------');
  };
  
  

  return (
    <TokenContext.Provider value={{ token, loggedIn, login, logout,userName,userID }}>
      {children}
    </TokenContext.Provider>
  );
};
