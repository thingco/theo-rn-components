import React from "react";
import { ViewStyle, TextStyle, StyleProp } from "react-native";
declare type ScreenProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const Screen: React.FC<ScreenProps>;
declare type TextProps = {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
};
declare const Text: React.FC<TextProps>;
export { Text, Screen };
//# sourceMappingURL=Base.d.ts.map