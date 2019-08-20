import React from "react";
declare type DistanceUnit = "I" | "M";
declare type Props = {
    precision: number;
    style?: Array<import("react-native").TextStyle>;
    units: DistanceUnit;
};
declare type DistanceProps = {
    km: number;
} & Props;
declare const FormattedDistance: React.FC<DistanceProps>;
declare type SpeedProps = {
    kmph: number;
} & Props;
declare const FormattedSpeed: React.FC<SpeedProps>;
export { FormattedDistance, FormattedSpeed };
//# sourceMappingURL=Quantities.d.ts.map