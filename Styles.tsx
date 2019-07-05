/**
 * REVIEW(@DanCouper)
 *
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
 * It is_just_ an abstraction layer over the standard style prop. This:
 *
 *    <Text style={{ color: "#ffffff", fontSize: 16 }}>Hello!</Text>
 *
 * becomes this:
 *
 *    <Text style={[s.white, s.font_base]}>Hello!</Text>
 *
 * This may seem like a pointless abstraction, but it makes applying styling
 * ridiculously quick, with the downside that:
 *
 * a. everything has to be defined up-front
 * b. everything is now fairly constrained by these up-front definitions.
 *
 * Note that the styles can, however, be easily overridden on a per-component
 * basis:
 *
 *    <Text style={[s.white, s.font_base, myStyle.foo]}>Hello!</Text>
 */
import { StyleSheet } from "react-native";

/* ========================================================================== *\
 * CONSTANTS
\* ========================================================================== */
export const COLOUR_BLACK = "#000000";
export const COLOUR_DARK = "#003E52";
export const COLOUR_MID = "#1A5163";
export const COLOUR_LIGHT = "#19988B";
export const COLOUR_CONTRAST = "#FF6D37";
export const COLOUR_WHITE = "#FFFFFF";
export const COLOUR_GREY = "#FCFCFC";

export const FONT_BARIOL = "Bariol";
export const FONT_BARIOL_BOLD = "BariolBold";

export const FONT_SIZE_SMALL = 14;
export const FONT_SIZE_BASE = 16;
export const FONT_SIZE_LARGE = 18;
export const FONT_SIZE_XLARGE = 20;
export const FONT_SIZE_XXLARGE = 24;

export const SPACING_XSMALL = 4;
export const SPACING_SMALL = 8;
export const SPACING_BASE = 16;
export const SPACING_LARGE = 24;

export const BORDER_RADIUS_BASE = 4;

/* ========================================================================== *\
 * STYLES
\* ========================================================================== */
export const storybookTheme = {
  backgroundColor: COLOUR_DARK,
  headerTextColor: COLOUR_WHITE,
  labelColor: COLOUR_WHITE,
  borderColor: COLOUR_LIGHT,
  previewBorderColor: COLOUR_LIGHT,
  buttonTextColor: COLOUR_GREY,
  buttonActiveTextColor: COLOUR_WHITE,
};

export default StyleSheet.create({
  /* -------------------------------------- *\
   * COLOURS
  \* -------------------------------------- */
  black: { color: COLOUR_BLACK },
  white: { color: COLOUR_WHITE },
  light: { color: COLOUR_LIGHT },

  bg_dark: { backgroundColor: COLOUR_DARK },
  bg_mid: { backgroundColor: COLOUR_MID },
  bg_light: { backgroundColor: COLOUR_LIGHT },
  bg_contrast: { backgroundColor: COLOUR_CONTRAST },
  bg_white: { backgroundColor: COLOUR_WHITE },
  bg_grey: { backgroundColor: COLOUR_GREY },

  border_light: { borderColor: COLOUR_LIGHT },

  /* -------------------------------------- *\
   * SPACING
  \* -------------------------------------- */
  rounded: { borderRadius: BORDER_RADIUS_BASE },

  border_2: { borderWidth: 2 },

  p_xs: { padding: SPACING_XSMALL },
  p_sm: { padding: SPACING_SMALL },
  p_base: { padding: SPACING_BASE },

  pt_base: { paddingTop: SPACING_BASE },
  pt_lg: { paddingTop: SPACING_LARGE },

  /* -------------------------------------- *\
   * TYPOGRAPHY
  \* -------------------------------------- */
  base_font: { fontFamily: FONT_BARIOL },
  base_font_bold: { fontFamily: FONT_BARIOL_BOLD },

  text_sm: { fontSize: FONT_SIZE_SMALL },
  text_base: { fontSize: FONT_SIZE_BASE },
  text_lg: { fontSize: FONT_SIZE_LARGE },
  text_xl: { fontSize: FONT_SIZE_XLARGE },

  underline: { textDecorationLine: "underline" },

  text_left: { textAlign: "left" },
  text_centre: { textAlign: "center" },
  text_right: { textAlign: "right" },

  /* -------------------------------------- *\
   * FLEX LAYOUT
  \* -------------------------------------- */
  flex_row: { flexDirection: "row" },
  flex_col: { flexDirection: "column" },

  flex_1: { flex: 1 },

  align_start: { alignItems: "flex-start" },
  align_center: { alignItems: "center" },
  align_end: { alignItems: "flex-end" },

  justify_start: { justifyContent: "flex-start" },
  justify_between: { justifyContent: "space-between" },
  justify_center: { justifyContent: "center" },
  justify_end: { justifyContent: "flex-end" },

  /* -------------------------------------- *\
   * MINIMUM SIZINGS
  \* -------------------------------------- */
  min_button_height: { minHeight: 55 },
});
