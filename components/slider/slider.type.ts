import React from "react";

export type SliderProps<T> = {
  values: T[];
  render: (currentValue?: T) => React.ReactNode;
};
