import React from "react";
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
declare type ScoreMeterProps = {
    score: number;
    size: number;
};
declare const ScoreMeter: React.FC<ScoreMeterProps>;
export { ScoreMeter };
//# sourceMappingURL=Meters.d.ts.map