import React from "react";
import { G, Path, Svg, Text } from "react-native-svg";
import { COLOUR_GREY, COLOUR_ORANGE, COLOUR_YELLOW, COLOUR_LIGHT, COLOUR_DARK, FONT_BASE_FAMILY, FONT_SIZE_LARGE, } from "./Styles";
class InvalidScoreError extends Error {
    constructor() {
        super(...arguments);
        this.message = "Score must be an integer between 0 and 100 inclusive";
    }
}
const ScoreMeter = ({ score, size, }) => {
    // arc length = circumference * (fraction of circle represented by the arc)
    const arcLength = 2 * Math.PI * 28 * (270 / 360);
    // Multiply that by the remainder of the fractional percentage value of the
    // current score. Note that is the **remainder**: just using score / 100 will
    // cause the indicator to go anticlockwise.
    const indicatorLength = arcLength * (1 - score / 100);
    return (<Svg viewBox="-32 -32 64 64" width={size} height={size}>
      <G fill="none" strokeWidth={4} strokeLinecap="round">
        <Path d="M -20 20 A 28 28, 0, 1, 1, 20 20" stroke={COLOUR_GREY}/>
        <Path d="M -20 20 A 28 28, 0, 1, 1, 20, 20" stroke={scoreColour(score)} strokeDasharray={arcLength} strokeDashoffset={indicatorLength}/>
      </G>
      <Text y={5} textAnchor="middle" fill={COLOUR_DARK} fontFamily={FONT_BASE_FAMILY} fontSize={FONT_SIZE_LARGE} fontWeight="bold">
        {score}
      </Text>
    </Svg>);
};
function scoreColour(score) {
    if (!Number.isInteger(score) && (score < 0 || score > 100)) {
        throw new InvalidScoreError();
    }
    switch (true) {
        case score < 50:
            return COLOUR_ORANGE;
        case score < 75:
            return COLOUR_YELLOW;
        case score <= 100:
            return COLOUR_LIGHT;
        default:
            // NOTE default case included to prevent compiler screaming about
            // possible no return value for the function.
            throw new InvalidScoreError();
    }
}
export { ScoreMeter };
//# sourceMappingURL=Meters.js.map