import React from "react";
import { TouchableOpacity, TextStyle, StyleProp } from "react-native";
import { Text } from "./Base";

import s from "./Styles";

type LinkProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
};

/** External links and groups of links, styled like standard HTML w/underline: */
const Link: React.FC<LinkProps> = (props: LinkProps) => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <Text style={[s.white, s.text_sm, s.underline]}>{props.children}</Text>
  </TouchableOpacity>
);

export { Link };
