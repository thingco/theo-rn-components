import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export declare const NavTitle: React.FC<{
    children: React.ReactNode;
}>;
export declare type ButtonType = "close" | "back" | "forward";
declare type IconButtonProps = {
    buttonType: ButtonType;
    size: number;
    color: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};
declare const IconButton: React.FC<IconButtonProps>;
declare type NavButtonAlignment = "left" | "right" | "centre";
declare type NavIconButtonProps = {
    buttonType: ButtonType;
    buttonAlignment: NavButtonAlignment;
    onPress?: () => void;
};
declare const NavIconButton: React.FC<NavIconButtonProps>;
declare type NavTextButtonProps = {
    children: React.ReactNode;
    buttonAlignment: NavButtonAlignment;
    onPress?: () => void;
};
declare const NavTextButton: React.FC<NavTextButtonProps>;
declare const NavSpacerLeft: React.FC<{}>;
declare const NavSpacerRight: React.FC<{}>;
export { IconButton, NavIconButton, NavSpacerLeft, NavSpacerRight, NavTextButton, };
//# sourceMappingURL=NavButtons.d.ts.map