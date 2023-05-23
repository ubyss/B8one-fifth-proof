import { useQuery } from '@apollo/client';
import React, { createContext, useContext, useState } from 'react';
import { getAll } from '../../graphql/getAll';

interface User {
  name: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setUt: React.Dispatch<React.SetStateAction<string>>;
  t: string
  data: object | null
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [t, setUt] = useState('dwdwdwdwd');
  const [data, setData] = useState({})

  useQuery(getAll, {
    onCompleted(data) {
      setData(data)
    },
  });


  return (
    <UserContext.Provider value={{ user, setUser, t, setUt, data }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };