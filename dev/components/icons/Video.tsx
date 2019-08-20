import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgVideo = ({ color, ...props }: { color: string } & SvgProps) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M7.92 17.56H41v28.88H8z"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={3}
    />
    <Path
      d="M47.32 26.42l8.74-4.26v19.68l-8.74-4.26z"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={3}
    />
  </Svg>
);

export default SvgVideo;
