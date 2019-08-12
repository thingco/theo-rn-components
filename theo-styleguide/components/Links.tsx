import React from "react";
import { TouchableOpacity, View } from "react-native";
import { BaseText } from "./Base";

import s from "./Styles";

/** External links and groups of links, styled like standard HTML w/underline: */
export const Link = (props) => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <BaseText style={[s.white, s.text_sm, s.underline]}>
      {props.children}
    </BaseText>
  </TouchableOpacity>
);

export const LinkGroup = ({ links, ...props }) => (
  <View style={[s.flex_row, s.justify_between, props.style]}>
    {links.map(({ onPress, linkText }, i) => (
      <Link key={i} onPress={onPress}>
        {linkText}
      </Link>
    ))}
  </View>
);
