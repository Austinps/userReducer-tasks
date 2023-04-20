import { createContext, useContext, useState } from 'react';

const ActiveListContext = createContext(null);

export function ActiveListProvider({ children }) {
  const [activeListId, setActiveListId] = useState('list1');

  return (
    <ActiveListContext.Provider value={{ activeListId, setActiveListId }}>
      {children}
    </ActiveListContext.Provider>
  );
}

export const useActiveList = () => useContext(ActiveListContext);
