import React from "react";
import { TextStyle, StyleProp } from "react-native";
declare type LinkProps = {
    children: React.ReactNode;
    onPress: () => void;
    style?: StyleProp<TextStyle>;
};
/** External links and groups of links, styled like standard HTML w/underline: */
declare const Link: React.FC<LinkProps>;
export { Link };
//# sourceMappingURL=Links.d.ts.map