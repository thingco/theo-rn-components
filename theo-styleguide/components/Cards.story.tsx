import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, date, number } from "@storybook/addon-knobs";

import { Screen, BaseText as Text } from "./Base";
import { ImageCard, BlockCard } from "./Cards";
import s from "./Styles";

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("Image card (single)", () => (
    <ImageCard
      source={require("../assets/images/100.png")}
      textComponent={
        <>
          <Text style={[s.base_font_bold]}>Hello</Text>
          <Text>I'm some text.</Text>
        </>
      }
    />
  ))
  .add("Image card (multiple in list)", () => (
    <>
      <ImageCard
        source={require("../assets/images/100.png")}
        textComponent={
          <>
            <Text style={[s.base_font_bold, s.mb_base]}>Hello</Text>
            <Text>I'm some text.</Text>
          </>
        }
      />
      <ImageCard
        source={require("../assets/images/100.png")}
        textComponent={
          <>
            <Text style={[s.base_font_bold, s.mb_base]}>Hello</Text>
            <Text>I'm some text.</Text>
          </>
        }
      />
      <ImageCard
        source={require("../assets/images/100.png")}
        textComponent={
          <>
            <Text style={[s.base_font_bold, s.mb_base]}>Hello</Text>
            <Text>I'm some text.</Text>
          </>
        }
      />
    </>
  ))
  .add("Block card (single)", () => (
    <BlockCard
      score={number("Score", 42, { range: true, min: 0, max: 100, step: 1 })}
      totalMiles={number("Total Miles", 104, {
        range: true,
        min: 100,
        max: 115,
        step: 1,
      })}
      journeysCompleted={number("Journeys Completed", 10, {
        range: true,
        min: 1,
        max: 100,
        step: 1,
      })}
      dateCompleted={date("Date Completed", new Date(Date.now()))}
    />
  ))
  .add("Block card (multiple in list)", () => (
    <>
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
    </>
  ));
