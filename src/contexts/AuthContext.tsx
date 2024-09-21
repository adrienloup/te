import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SlotType } from '../models/Slot';

export const AuthContext = createContext<{
  account: boolean;
  setAccount: (account: boolean) => void;
}>({
  account: false,
  setAccount: (account: boolean) => account,
});

export function AuthProvider({ children }: { children: SlotType }) {
  const [account, setAccount] = useLocalStorage('_lcc_1em0m_3_account', false);

  return (
    <AuthContext.Provider value={{ account, setAccount }}>
      {children}
    </AuthContext.Provider>
  );
}
