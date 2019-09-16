/**
 * This is an attempt to provide a framework for the styling of the app. It
 * is based on [TailwindCSS](https://tailwindcss.com). The way it works:
 *
 * - A set of constants that provide the base values for everything (_nb_ think
 *   very carefully if you think they need to be overridden, and there should
 *   be as few of these variables as possible).
 * - One single overarching stylesheet where _each rule is defined seperately_.
 * - These rules can then be passed into a component's `style` prop as array
 *   elements.
 *
 * It is _just_ an abstraction layer over the standard style prop. This:
 *
 *    <Text style={{ color: "#ffffff", fontSize: 16 }}>Hello!</Text>
 *
 * becomes this:
 *
 *    <Text style={[s.white, s.font_base]}>Hello!</Text>
 *
 * This may seem like a pointless abstraction, but it makes applying styling
 * ridiculously quick, with the downside that everything has to be defined up-front.
 * On the upside, everything is now extremely constrained by these up-front definitions.
 *
 * Note that the styles can, however, be easily overridden on a per-component
 * basis:
 *
 *    <Text style={[s.white, s.font_base, myStyle.foo]}>Hello!</Text>
 */
import { StyleSheet } from "react-native";
import { tintHex } from "../lib/colour-functions";
/* ========================================================================== *\
 * CONSTANTS
\* ========================================================================== */
export const COLOUR_BLACK = "#000000";
export const COLOUR_DARK = "#003E52";
export const COLOUR_MID = "#1A5163";
export const COLOUR_LIGHT = "#19988B";
export const COLOUR_GREY = "#FCFCFC";
export const COLOUR_WHITE = "#FFFFFF";
export const COLOUR_ORANGE = "#FF6D37";
export const COLOUR_YELLOW = "#f4c400";
export const COLOUR_LIGHT_TINTED = tintHex(COLOUR_LIGHT, 0.5);
export const COLOUR_ORANGE_TINTED = tintHex(COLOUR_ORANGE, 0.5);
export const COLOUR_YELLOW_TINTED = tintHex(COLOUR_YELLOW, 0.5);
export const FONT_BASE_FAMILY = "Bariol-Regular";
// NOTE Expo needs to load actual font variations as seperate fonts: one cannot
// simply load bold/italic/etc versions then set weight to bold/italic/etc.
export const FONT_BASE_FAMILY_BOLD = "Bariol-Bold";
export const FONT_SIZE_SMALL = 14;
export const FONT_SIZE_BASE = 16;
export const FONT_SIZE_LARGE = 18;
export const FONT_SIZE_XLARGE = 20;
export const FONT_SIZE_XXLARGE = 24;
export const SPACING_XSMALL = 4;
export const SPACING_SMALL = 8;
export const SPACING_BASE = 16;
export const SPACING_LARGE = 24;
export const NAV_BUTTON_WIDTH = 60;
export const BORDER_RADIUS_BASE = 4;
/* ========================================================================== *\
 * STYLES
\* ========================================================================== */
/**
 * TODO: This is a bodge. react-native-svg does not allow setting SVG attributes
 * via styles: they must be passed as attributes. This makes the overall
 * stylesheet useless, so an object stands in for it
 *
 * Ideally want to be able to add an "svgStyle" prop to arbitrary SVG elements
 * which allows applying styles: it effectively has to automatically spread to
 * become attributes
 *
 *     <G svgStyle={[s.stroke_white, s.stroke_three, s.fill_none]}>...</G>
 *
 * Becomes
 *
 *     <G stroke="#ffffff" strokeWidth={3} fill="none">...</G>
 */
// export const SVGStyles = {};
export default StyleSheet.create({
    /* -------------------------------------- *\
     * COLOURS
    \* -------------------------------------- */
    black: { color: COLOUR_BLACK },
    dark: { color: COLOUR_DARK },
    mid: { color: COLOUR_MID },
    light: { color: COLOUR_LIGHT },
    contrast: { color: COLOUR_ORANGE },
    warning: { color: COLOUR_YELLOW },
    white: { color: COLOUR_WHITE },
    grey: { color: COLOUR_GREY },
    transparent: { color: "rgba(0, 0, 0, 0.0)" },
    bg_black: { backgroundColor: COLOUR_BLACK },
    bg_dark: { backgroundColor: COLOUR_DARK },
    bg_mid: { backgroundColor: COLOUR_MID },
    bg_light: { backgroundColor: COLOUR_LIGHT },
    bg_contrast: { backgroundColor: COLOUR_ORANGE },
    bg_warning: { backgroundColor: COLOUR_YELLOW },
    bg_white: { backgroundColor: COLOUR_WHITE },
    bg_grey: { backgroundColor: COLOUR_GREY },
    bg_transparent: { backgroundColor: "rgba(0, 0, 0, 0.0)" },
    bg_light_tinted: { backgroundColor: COLOUR_LIGHT_TINTED },
    bg_contrast_tinted: { backgroundColor: COLOUR_ORANGE_TINTED },
    bg_warning_tinted: { backgroundColor: COLOUR_YELLOW_TINTED },
    border_light: { borderColor: COLOUR_LIGHT },
    border_contrast: { borderColor: COLOUR_ORANGE },
    border_warning: { borderColor: COLOUR_YELLOW },
    border_transparent: { borderColor: "rgba(0, 0, 0, 0.0)" },
    /* -------------------------------------- *\
     * SPACING
    \* -------------------------------------- */
    // Padding, all sides:
    p_xs: { padding: SPACING_XSMALL },
    p_sm: { padding: SPACING_SMALL },
    p_base: { padding: SPACING_BASE },
    p_lg: { padding: SPACING_LARGE },
    // Padding, horizontal (left and right):
    ph_xs: { paddingHorizontal: SPACING_XSMALL },
    ph_sm: { paddingHorizontal: SPACING_SMALL },
    ph_base: { paddingHorizontal: SPACING_BASE },
    ph_lg: { paddingHorizontal: SPACING_LARGE },
    // Padding, vertical (top and bottom):
    pv_xs: { paddingVertical: SPACING_XSMALL },
    pv_sm: { paddingVertical: SPACING_SMALL },
    pv_base: { paddingVertical: SPACING_BASE },
    // Padding, specific sides (t: top, r: right, b: bottom, l: left)
    pt_base: { paddingTop: SPACING_BASE },
    pt_lg: { paddingTop: SPACING_LARGE },
    // Margin, all sides:
    m_sm: { margin: SPACING_SMALL },
    m_base: { margin: SPACING_BASE },
    // Margin, vertical (top and bottom):
    mv_base: { marginVertical: SPACING_BASE },
    // Margin, specific sides (t: top, r: right, b: bottom, l: left)
    mb_xs: { marginBottom: SPACING_XSMALL },
    mb_sm: { marginBottom: SPACING_SMALL },
    mb_base: { marginBottom: SPACING_BASE },
    /* -------------------------------------- *\
     * BORDERS
    \* -------------------------------------- */
    rounded: { borderRadius: BORDER_RADIUS_BASE },
    border_2: { borderWidth: 2 },
    bb_thick: { borderBottomWidth: SPACING_XSMALL },
    /* -------------------------------------- *\
     * TYPOGRAPHY
    \* -------------------------------------- */
    base_font: { fontFamily: FONT_BASE_FAMILY },
    base_font_bold: { fontFamily: FONT_BASE_FAMILY_BOLD },
    text_sm: { fontSize: FONT_SIZE_SMALL },
    text_base: { fontSize: FONT_SIZE_BASE },
    text_lg: { fontSize: FONT_SIZE_LARGE },
    text_xl: { fontSize: FONT_SIZE_XLARGE },
    text_xxl: { fontSize: FONT_SIZE_XXLARGE },
    bold: { fontWeight: "bold" },
    underline: { textDecorationLine: "underline" },
    text_left: { textAlign: "left" },
    text_centre: { textAlign: "center" },
    text_right: { textAlign: "right" },
    spacing_half: { letterSpacing: 0.5 },
    spacing_1: { letterSpacing: 1 },
    /* -------------------------------------- *\
     * LAYOUT
    \* -------------------------------------- */
    overflow_hidden: { overflow: "hidden" },
    fullwidth: { width: "100%" },
    /* -------------------------------------- *\
     * FLEX LAYOUT
    \* -------------------------------------- */
    flex_row: { flexDirection: "row" },
    flex_col: { flexDirection: "column" },
    flex_0: { flex: 0 },
    flex_1: { flex: 1 },
    flex_grow_1: { flexGrow: 1 },
    align_start: { alignItems: "flex-start" },
    align_center: { alignItems: "center" },
    align_stretch: { alignItems: "stretch" },
    align_end: { alignItems: "flex-end" },
    justify_start: { justifyContent: "flex-start" },
    justify_between: { justifyContent: "space-between" },
    justify_center: { justifyContent: "center" },
    justify_end: { justifyContent: "flex-end" },
    /* -------------------------------------- *\
     * MINIMUM SIZINGS
    \* -------------------------------------- */
    img_thumb_height: { height: 100 },
    img_thumb_width: { width: 100 },
    min_button_height: { minHeight: 55 },
    nav_button_width: { width: NAV_BUTTON_WIDTH },
    /* -------------------------------------- *\
     * SPEZIAL
    \* -------------------------------------- */
    punchcut_sm: {
        backgroundColor: COLOUR_DARK,
        borderRadius: SPACING_SMALL,
        height: SPACING_BASE,
        left: 92,
        position: "absolute",
        width: SPACING_BASE,
    },
    punchcut_sm_top: { top: 0 - SPACING_SMALL },
    punchcut_sm_bottom: { bottom: 0 - SPACING_SMALL },
    punchcut_lg: {
        backgroundColor: COLOUR_DARK,
        borderRadius: SPACING_LARGE,
        height: SPACING_LARGE * 2,
        position: "absolute",
        top: 0 - SPACING_LARGE,
        width: SPACING_LARGE * 2,
    },
    punchcut_lg_left: { left: 0 - SPACING_LARGE },
    punchcut_lg_right: { right: 0 - SPACING_LARGE },
});
//# sourceMappingURL=Styles.js.map