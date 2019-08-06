import React from "react";

import { DarkText } from "../components/Base";
import { ImageCard, BlockCard } from "../components/MediaObjects";

import s from "../Styles";
import { View } from "react-native";

export const ExampleImageCard = () => (
  <>
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <DarkText style={[s.base_font_bold]}>Hello</DarkText>
          <DarkText>I'm some text.</DarkText>
        </>
      }
    />
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <DarkText style={[s.base_font_bold]}>Hello</DarkText>
          <DarkText>I'm some text.</DarkText>
        </>
      }
    />
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <DarkText style={[s.base_font_bold]}>Hello</DarkText>
          <DarkText>I'm some text.</DarkText>
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
