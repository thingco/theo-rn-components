import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgTailgating = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G>
      <G>
        <Path
          d="M4 21.77h9.31a2.17 2.17 0 012 1.35l3.77 9.42h2.15a2.15 2.15 0 012.15 2.15v10.77H18"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7.23 45.46L4 45.46"
        />
        <Path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M60 45.46L48.15 45.46"
        />
        <Path
          d="M37.38 45.46H32V34.69a2.15 2.15 0 012.15-2.15h4.31l5.84-9.73a2.15 2.15 0 011.84-1H60"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path d="M42.77 42.08a3.39 3.39 0 11-3.39 3.38 3.38 3.38 0 013.39-3.38m0-2a5.39 5.39 0 105.38 5.38 5.39 5.39 0 00-5.38-5.38z" />
        <Path d="M12.62 42.08a3.39 3.39 0 11-3.39 3.38 3.39 3.39 0 013.39-3.38m0-2A5.39 5.39 0 1018 45.46a5.38 5.38 0 00-5.38-5.38z" />
      </G>
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M21.1 18.41L25.67 22.98" />
        <Path d="M38.58 18.41L34.01 22.98" />
        <Path d="M29.85 13.15L29.85 19.62" />
      </G>
    </G>
  </Svg>
);

export default SvgTailgating;
