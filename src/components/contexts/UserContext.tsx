import { useQuery } from '@apollo/client';
import React, { createContext, useContext, useState } from 'react';
import { getOrderForm } from '../../graphql/getOrderForm';
import { ProductListProps, Product  } from './../../interfaces/IOrderform'
interface UserContextProps {
  products: Product[] | null
  setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]  | null>(null);

  useQuery(getOrderForm, {
    variables: {
      "input": {
        orderFormId: "c7eb7303-c53f-417d-8d51-cce67e5959e1"
      }
    },
    onCompleted(data) {
      const { orderForm } = data
      const { items } = orderForm
      setProducts(items)
    },
    fetchPolicy: 'no-cache'
  });

  


  return (
    <UserContext.Provider value={{ products, setProducts }}>
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