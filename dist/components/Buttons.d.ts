import React from "react";
declare type ButtonType = "primary" | "secondary" | "danger";
declare type ButtonProps = {
    buttonType: ButtonType;
    children: import("react").ReactNode;
    disabled?: boolean;
    onPress: () => void;
    style?: Array<import("react-native").TextStyle>;
};
declare const Button: React.FC<ButtonProps>;
export { Button };
//# sourceMappingURL=Buttons.d.ts.map