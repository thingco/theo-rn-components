import { Text } from "./Base";
import { kmToMiles } from "../lib/quantity-functions";
import { round } from "../lib/math-functions";
import React from "react";

type DistanceUnit = "I" | "M";

type Props = {
  precision: number;
  style?: Array<import("react-native").TextStyle>;
  units: DistanceUnit;
};

type DistanceProps = {
  km: number;
} & Props;

const FormattedDistance: React.FC<DistanceProps> = ({
  km,
  units = "I",
  precision = 1,
  ...props
}: DistanceProps) => {
  const dist = units === "I" ? kmToMiles(km, precision) : round(km, precision);
  const unitSuffix = units === "I" ? "mi" : "km";

  return (
    <Text style={props.style}>
      {dist.toFixed(precision)}
      {unitSuffix}
    </Text>
  );
};

type SpeedProps = {
  kmph: number;
} & Props;

const FormattedSpeed: React.FC<SpeedProps> = ({
  kmph,
  units = "I",
  precision = 1,
  ...props
}: SpeedProps) => {
  const dist =
    units === "I" ? kmToMiles(kmph, precision) : round(kmph, precision);
  const unitSuffix = units === "I" ? "mph" : "kmph";

  return (
    <Text style={props.style}>
      {dist.toFixed(precision)}
      {unitSuffix}
    </Text>
  );
};

export { FormattedDistance, FormattedSpeed };
