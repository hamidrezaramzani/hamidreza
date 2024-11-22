import { ThemeContainerProps } from "./theme-container.type";

export const ThemeContainer = ({ dark, light, theme }: ThemeContainerProps) => {
  return theme === "light" ? light : dark;
};
