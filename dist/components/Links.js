import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "./Base";
import s from "./Styles";
/** External links and groups of links, styled like standard HTML w/underline: */
const Link = (props) => (<TouchableOpacity style={props.style} onPress={props.onPress}>
    <Text style={[s.white, s.text_sm, s.underline]}>{props.children}</Text>
  </TouchableOpacity>);
export { Link };
//# sourceMappingURL=Links.js.map