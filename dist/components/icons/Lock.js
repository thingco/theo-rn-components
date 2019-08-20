import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const SvgLock = ({ color, ...props }) => (<Svg viewBox="0 0 64 64" {...props}>
    <Path fill="none" stroke={color} strokeLinejoin="round" strokeWidth={3} d="M16.24 28.68H47.76V51.91H16.24z"/>
    <Circle cx={32} cy={37.81} r={2.49} fill="none" stroke={color} strokeWidth={3}/>
    <Path d="M32 45.27v-5" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M42 28.68v-6.11a10.22 10.22 0 00-10-10.48 10.22 10.22 0 00-9.95 10.48v6.11" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
  </Svg>);
export default SvgLock;
//# sourceMappingURL=Lock.js.map