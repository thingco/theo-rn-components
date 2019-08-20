import React from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import StorybookUIRoot from "./storybook";
import s from "./components/Styles";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Bariol: require("./assets/fonts/BariolRegular.ttf"),
        BariolBold: require("./assets/fonts/BariolBold.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <View style={[s.flex_1]}>
        <StorybookUIRoot />
      </View>
    );
  }
}
