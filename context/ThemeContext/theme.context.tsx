"use client";
import { createContext, useState } from "react";
import { ThemeContextProps, ThemeContextProviderProps } from "./theme.type";

export const ThemeContextProvider = createContext<ThemeContextProviderProps>(
  {}
);

export const ThemeContext = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContextProvider.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};
