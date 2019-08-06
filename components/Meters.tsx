import React from "react";
import { G, Path, Svg, Text } from "react-native-svg";

import s, {
  COLOUR_GREY,
  COLOUR_ORANGE,
  COLOUR_YELLOW,
  COLOUR_BLACK,
  COLOUR_MID,
  COLOUR_LIGHT,
  COLOUR_DARK,
  FONT_BASE_FAMILY,
  FONT_SIZE_LARGE,
} from "../Styles";

export class InvalidScoreError extends Error {
  message = "Score must be an integer between 0 and 100 inclusive";
}

/**
 * This needs some explanation, as it uses SVG's somewhat arcane Arc syntax.
 *
 * 1. The overall icon has a 64x64 viewbox with the coordinates centred.
 * 2. There are two stroked paths that sit on top of each other: the first
 *    is the background arc, the second is the indicator line for the score.
 * 3. The indicator uses strokeDashArray and strokeDashOffset to only go to
 *    the required point -- for a good explanation, read through this:
 *    https://codepen.io/xgad/post/svg-radial-progress-meters
 * 4. The path declaration:
 *
 *       "M -20 20 A 28 28, 0, 1, 1, 20 20"
 *
 *    a. move (M) to the start point (-20 20)
 *    b. start an arc with radius 28 (A 28 28)
 *    c. x-rotation not set (0)
 *    d. large-arc-flag set (1)
 *    e. sweep-flag set (1)
 *    f. end the arc at end point (20 20)
 *
 *    It's a slightly hard syntax to grok; best of the explanations I found:
 *    http://apex.infogridpacific.com/SVG/svg-tutorial-lesson17-path-arcs.html
 * 5. To get the correct dashOffset value for the score, I need to
 *    multiply the arc length by the inverse of the score % value: the
 *    variable names and exuation are hopefully self-explanatory.
 *
 * @param {Object} props
 * @param {number} score - an integer between 0 and 100 inclusive
 * @param {number} width
 * @param {number} height
 */
export function ScoreMeter({ score, size }) {
  // arc length = circumference * (fraction of circle represented by the arc)
  const arcLength = 2 * Math.PI * 28 * (270 / 360);
  // Multiply that by the remainder of the fractional percentage value of the
  // current score. Note that is the **remainder**: just using score / 100 will
  // cause the indicator to go anticlockwise.
  const indicatorLength = arcLength * (1 - score / 100);

  return (
    <Svg viewBox="-32 -32 64 64" width={size} height={size}>
      <G fill="none" strokeWidth={4} strokeLinecap="round">
        <Path d="M -20 20 A 28 28, 0, 1, 1, 20 20" stroke={COLOUR_GREY} />
        <Path
          d="M -20 20 A 28 28, 0, 1, 1, 20, 20"
          stroke={scoreColour(score)}
          strokeDasharray={arcLength}
          strokeDashoffset={indicatorLength}
        />
      </G>
      <Text
        y={5}
        textAnchor="middle"
        fill={COLOUR_DARK}
        fontFamily={FONT_BASE_FAMILY}
        fontSize={FONT_SIZE_LARGE}
        fontWeight="bold"
      >
        {score}
      </Text>
    </Svg>
  );
}

function scoreColour(score) {
  if (!Number.isInteger(score) && (score < 0 || score > 100))
    throw new InvalidScoreError();

  switch (true) {
    case score < 50:
      return COLOUR_ORANGE;
    case score < 75:
      return COLOUR_YELLOW;
    case score <= 100:
      return COLOUR_LIGHT;
  }
}
