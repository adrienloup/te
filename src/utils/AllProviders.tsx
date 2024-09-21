import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from 'react';
import { SlotType } from '../models/Slot';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { UserProvider } from '../contexts/UserContext';

type ProvidersType = [
  ComponentType<{ children: SlotType }>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const combineProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: SlotType }) => <>{children}</>
  );

export const AllProviders: FunctionComponent<{ children: SlotType }> =
  combineProviders([
    [LanguageProvider],
    [ThemeProvider],
    [AuthProvider],
    [UserProvider],
  ]);
