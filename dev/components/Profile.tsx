import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./Base";
import { Icon } from "./Icons";

import s, { COLOUR_LIGHT, COLOUR_WHITE } from "./Styles";

const AccountDetails = ({ name, email }) => (
  <View>
    <Text style={[s.text_xl, s.text_centre]}>{name}</Text>
    <Text style={[s.text_base, s.text_centre]}>{email}</Text>
  </View>
);

const ProfileMenuItem = ({ icon, text, ...props }) => (
  <TouchableOpacity
    style={[s.flex_row, s.align_center]}
    onPress={props.onPress}
  >
    <View style={[s.align_center, s.justify_center]}>
      <Icon selectorString={icon} color={COLOUR_WHITE} height={32} width={32} />
    </View>
    <Text style={[s.flex_1, s.text_lg, s.p_base, s.white]}>{text}</Text>
  </TouchableOpacity>
);

const ProfileMenu = ({ menuItems, ...props }) => (
  <View style={props.style}>
    {menuItems.map(({ icon, onPress, text }, i) => (
      <ProfileMenuItem icon={icon} key={i} onPress={onPress} text={text} />
    ))}
  </View>
);

export { AccountDetails, ProfileMenu };
