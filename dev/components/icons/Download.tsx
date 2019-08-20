import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgDownload = ({ color, ...props }: { color: string } & SvgProps) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M39.66 33.9h7.86L32 52 16.48 33.9h7.86V12h15.32z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
  </Svg>
);

export default SvgDownload;
