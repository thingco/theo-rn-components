import React from "react";
import { TouchableOpacity, TextStyle, StyleProp, Linking } from "react-native";
import { Text } from "./Base";

import s from "./Styles";

type LinkProps = {
  children: React.ReactNode;
  url: string;
  style?: StyleProp<TextStyle>;
};

/** External links and groups of links, styled like standard HTML w/underline: */
const Link: React.FC<LinkProps> = ({ url, children, ...props }: LinkProps) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Text style={[s.white, s.text_sm, s.underline, props.style]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export { Link };
