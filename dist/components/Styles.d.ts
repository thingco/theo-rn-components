export declare const COLOUR_BLACK = "#000000";
export declare const COLOUR_DARK = "#003E52";
export declare const COLOUR_MID = "#1A5163";
export declare const COLOUR_LIGHT = "#19988B";
export declare const COLOUR_GREY = "#FCFCFC";
export declare const COLOUR_WHITE = "#FFFFFF";
export declare const COLOUR_ORANGE = "#FF6D37";
export declare const COLOUR_YELLOW = "#f4c400";
export declare const COLOUR_LIGHT_TINTED: string;
export declare const COLOUR_ORANGE_TINTED: string;
export declare const COLOUR_YELLOW_TINTED: string;
export declare const FONT_BASE_FAMILY = "Bariol-Regular";
export declare const FONT_BASE_FAMILY_BOLD = "Bariol-Bold";
export declare const FONT_SIZE_SMALL = 14;
export declare const FONT_SIZE_BASE = 16;
export declare const FONT_SIZE_LARGE = 18;
export declare const FONT_SIZE_XLARGE = 20;
export declare const FONT_SIZE_XXLARGE = 24;
export declare const SPACING_XSMALL = 4;
export declare const SPACING_SMALL = 8;
export declare const SPACING_BASE = 16;
export declare const SPACING_LARGE = 24;
export declare const BORDER_RADIUS_BASE = 4;
declare const _default: {
    black: {
        color: string;
    };
    dark: {
        color: string;
    };
    mid: {
        color: string;
    };
    light: {
        color: string;
    };
    contrast: {
        color: string;
    };
    warning: {
        color: string;
    };
    white: {
        color: string;
    };
    grey: {
        color: string;
    };
    transparent: {
        color: string;
    };
    bg_black: {
        backgroundColor: string;
    };
    bg_dark: {
        backgroundColor: string;
    };
    bg_mid: {
        backgroundColor: string;
    };
    bg_light: {
        backgroundColor: string;
    };
    bg_contrast: {
        backgroundColor: string;
    };
    bg_warning: {
        backgroundColor: string;
    };
    bg_white: {
        backgroundColor: string;
    };
    bg_grey: {
        backgroundColor: string;
    };
    bg_transparent: {
        backgroundColor: string;
    };
    bg_light_tinted: {
        backgroundColor: string;
    };
    bg_contrast_tinted: {
        backgroundColor: string;
    };
    bg_warning_tinted: {
        backgroundColor: string;
    };
    border_light: {
        borderColor: string;
    };
    border_contrast: {
        borderColor: string;
    };
    border_warning: {
        borderColor: string;
    };
    border_transparent: {
        borderColor: string;
    };
    p_xs: {
        padding: number;
    };
    p_sm: {
        padding: number;
    };
    p_base: {
        padding: number;
    };
    ph_xs: {
        paddingHorizontal: number;
    };
    ph_sm: {
        paddingHorizontal: number;
    };
    ph_base: {
        paddingHorizontal: number;
    };
    ph_lg: {
        paddingHorizontal: number;
    };
    pv_xs: {
        paddingVertical: number;
    };
    pv_sm: {
        paddingVertical: number;
    };
    pv_base: {
        paddingVertical: number;
    };
    pt_base: {
        paddingTop: number;
    };
    pt_lg: {
        paddingTop: number;
    };
    m_sm: {
        margin: number;
    };
    mv_base: {
        marginVertical: number;
    };
    mb_base: {
        marginBottom: number;
    };
    rounded: {
        borderRadius: number;
    };
    border_2: {
        borderWidth: number;
    };
    bb_thick: {
        borderBottomWidth: number;
    };
    base_font: {
        fontFamily: string;
    };
    base_font_bold: {
        fontFamily: string;
    };
    text_sm: {
        fontSize: number;
    };
    text_base: {
        fontSize: number;
    };
    text_lg: {
        fontSize: number;
    };
    text_xl: {
        fontSize: number;
    };
    bold: {
        fontWeight: "bold";
    };
    underline: {
        textDecorationLine: "underline";
    };
    text_left: {
        textAlign: "left";
    };
    text_centre: {
        textAlign: "center";
    };
    text_right: {
        textAlign: "right";
    };
    spacing_half: {
        letterSpacing: number;
    };
    spacing_1: {
        letterSpacing: number;
    };
    overflow_hidden: {
        overflow: "hidden";
    };
    fullwidth: {
        width: string;
    };
    flex_row: {
        flexDirection: "row";
    };
    flex_col: {
        flexDirection: "column";
    };
    flex_0: {
        flex: number;
    };
    flex_1: {
        flex: number;
    };
    flex_grow_1: {
        flexGrow: number;
    };
    align_start: {
        alignItems: "flex-start";
    };
    align_center: {
        alignItems: "center";
    };
    align_stretch: {
        alignItems: "stretch";
    };
    align_end: {
        alignItems: "flex-end";
    };
    justify_start: {
        justifyContent: "flex-start";
    };
    justify_between: {
        justifyContent: "space-between";
    };
    justify_center: {
        justifyContent: "center";
    };
    justify_end: {
        justifyContent: "flex-end";
    };
    img_thumb_height: {
        height: number;
    };
    img_thumb_width: {
        width: number;
    };
    min_button_height: {
        minHeight: number;
    };
};
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
export default _default;
//# sourceMappingURL=Styles.d.ts.map