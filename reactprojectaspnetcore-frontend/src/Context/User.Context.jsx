import { createContext, useState } from 'react';

// As the actual value
export const UserContext = createContext({
  token: null,
  setToken: () => null,
});

export const UserProviver = ({ children }) => {
  const [token, setToken] = useState(null);
  const value = { token, setToken };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
