import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { Text } from "./Base";
import s from "./Styles";
/** External links and groups of links, styled like standard HTML w/underline: */
const Link = ({ url, children, ...props }) => (<TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Text style={[s.white, s.text_sm, s.underline, props.style]}>
      {children}
    </Text>
  </TouchableOpacity>);
export { Link };
//# sourceMappingURL=Links.js.map