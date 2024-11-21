import { RefObject } from "react";

export type UseOnVisibleProps<T> = {
  ref: RefObject<HTMLElement>;
  callback: () => void;
  values: T
};
