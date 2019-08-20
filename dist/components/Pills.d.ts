import React from "react";
import { TextStyle, StyleProp } from "react-native";
declare type PillType = "primary" | "contrast" | "warning";
declare type PillProps = {
    children: React.ReactNode;
    pillType: PillType;
    style?: StyleProp<TextStyle>;
};
declare const Pill: React.FC<PillProps>;
declare const PillOutlined: React.FC<PillProps>;
declare const PillTinted: React.FC<PillProps>;
export { Pill, PillOutlined, PillTinted };
//# sourceMappingURL=Pills.d.ts.map