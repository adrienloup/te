import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from 'react';
import { AlertProvider } from '../contexts/AlertContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { UserProvider } from '../contexts/UserContext';
import { SlotType } from '../models/Slot';

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
    [AlertProvider],
    [LanguageProvider],
    [ThemeProvider],
    [UserProvider],
  ]);
