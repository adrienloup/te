import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
  ReactNode,
} from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

type ProvidersType = [
  ComponentType<{ children: ReactNode }>,
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
    ({ children }: { children: ReactNode }) => <>{children}</>
  );

export const AllProviders: FunctionComponent<{ children: ReactNode }> =
  combineProviders([[ThemeProvider]]);
