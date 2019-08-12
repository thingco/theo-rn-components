/**
 * NOTE this would not normally exist in a bare Expo app. However, the
 * app makes use of the [`react-native-svg-transformer`](https://github.com/kristerkari/react-native-svg-transformer) package to
 * allow SVG files to be directly imported, so follows the directions in
 * that repo's README.
 */
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
