import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SlotType } from '../models/Slot';
import { userType } from '../models/User';

export const UserContext = createContext<{
  user: userType;
  setUser: (user: userType) => void;
}>({
  user: {
    id: 0,
    name: '',
    email: '',
    password: '',
  },
  setUser: (user: userType) => user,
});

export function UserProvider({ children }: { children: SlotType }) {
  const [user, setUser] = useLocalStorage<userType>('_lcc_1em0m_3_user', {
    id: 0,
    name: '',
    email: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
