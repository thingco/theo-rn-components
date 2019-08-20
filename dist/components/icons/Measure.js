import React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMeasure = ({ color, ...props }) => (<Svg viewBox="0 0 64 64" {...props}>
    <Path transform="rotate(-45 32.002 31.994)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M25.61 3.23H38.4V60.76H25.61z"/>
    <Path d="M21.51 19.89l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M17 15.37l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M26 24.41l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M30.55 28.93l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M35.07 33.45l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M39.59 38l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M44.11 42.49l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
    <Path d="M48.63 47l3-3" fill="none" stroke={color} strokeLinecap="round" strokeWidth={3}/>
  </Svg>);
export default SvgMeasure;
//# sourceMappingURL=Measure.js.map