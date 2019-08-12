import React from "react";
import { View } from "react-native";

import { BaseText as Text } from "../components/Base";
import { ImageCard, BlockCard } from "../components/MediaObjects";

import s from "../components/Styles";

export const ExampleImageCard = () => (
  <>
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <Text style={[s.base_font_bold]}>Hello</Text>
          <Text>I'm some text.</Text>
        </>
      }
    />
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <Text style={[s.base_font_bold]}>Hello</Text>
          <Text>I'm some text.</Text>
        </>
      }
    />
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <Text style={[s.base_font_bold]}>Hello</Text>
          <Text>I'm some text.</Text>
        </>
      }
    />
  </>
);

export const ExampleScoreBlockCard = () => (
  <View>
    <BlockCard
      score={48}
      totalMiles={103}
      journeysCompleted={12}
      dateCompleted="28/04/19"
    />
    <BlockCard
      score={64}
      totalMiles={101}
      journeysCompleted={16}
      dateCompleted="16/05/19"
    />
    <BlockCard
      score={83}
      totalMiles={104}
      journeysCompleted={12}
      dateCompleted="21/05/19"
    />
  </View>
);
