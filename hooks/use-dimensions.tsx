import React from "react";
import { Dimensions } from "react-native";

export const useDimensions = () => {
  const [{ width, height }] = React.useState(Dimensions.get("screen"));

  return { width, height };
};
