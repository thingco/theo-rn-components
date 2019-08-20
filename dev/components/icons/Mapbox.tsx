import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgMapbox = ({ color, ...props }: { color: string } & SvgProps) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 39.68c-1.88 0-13.16-10.13-13.16-20.25 0-7.59 5.26-12.65 13.16-12.65s13.16 5.06 13.16 12.65c0 10.12-11.28 20.25-13.16 20.25zm0-14.26a5.49 5.49 0 10-5.48-5.48A5.48 5.48 0 0032 25.42zm-12.23 8.4l-14.09 8L32 57.22l26.32-15.35-14.19-8.11"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
  </Svg>
);

export default SvgMapbox;
