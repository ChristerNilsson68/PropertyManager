import { createContext, useState } from 'react';

// As the actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProviver = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
