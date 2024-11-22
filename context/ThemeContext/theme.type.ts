import { Dispatch, ReactNode, SetStateAction } from "react";

export type ThemeContextProviderProps = {
  theme?: string;
  setTheme?: Dispatch<SetStateAction<string>>;
};

export type ThemeContextProps = {
  children: ReactNode;
};
