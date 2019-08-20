import { Text } from "./Base";
import { kmToMiles } from "../lib/quantity-functions";
import { round } from "../lib/math-functions";
import React from "react";
const FormattedDistance = ({ km, units = "I", precision = 1, ...props }) => {
    const dist = units === "I" ? kmToMiles(km, precision) : round(km, precision);
    const unitSuffix = units === "I" ? "mi" : "km";
    return (<Text style={props.style}>
      {dist.toFixed(precision)}
      {unitSuffix}
    </Text>);
};
const FormattedSpeed = ({ kmph, units = "I", precision = 1, ...props }) => {
    const dist = units === "I" ? kmToMiles(kmph, precision) : round(kmph, precision);
    const unitSuffix = units === "I" ? "mph" : "kmph";
    return (<Text style={props.style}>
      {dist.toFixed(precision)}
      {unitSuffix}
    </Text>);
};
export { FormattedDistance, FormattedSpeed };
//# sourceMappingURL=Quantities.js.map