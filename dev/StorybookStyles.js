import {
  COLOUR_DARK,
  COLOUR_WHITE,
  COLOUR_LIGHT,
  COLOUR_GREY,
} from "./components/Styles";

/**
 * The app renders a StorybookJS view. The following config object specifies,
 * in full, the styling for the React-Native storybook implementation.
 * This is undocumented functionality afaics, see this issue for details:
 *
 * https://github.com/storybookjs/storybook/issues/6605
 */
export default {
  backgroundColor: COLOUR_DARK,
  headerTextColor: COLOUR_WHITE,
  labelColor: COLOUR_WHITE,
  borderColor: COLOUR_LIGHT,
  previewBorderColor: COLOUR_LIGHT,
  buttonTextColor: COLOUR_GREY,
  buttonActiveTextColor: COLOUR_WHITE,
};
