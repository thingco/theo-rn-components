import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, date, number } from "@storybook/addon-knobs";

import { Screen, Text } from "./Base";
import {
  ImageCard,
  BlockCard,
  RewardCard,
  RewardCardFullScreen,
} from "./Cards";
import s from "./Styles";

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("Reward card (single)", () => (
    <RewardCard
      source={require("../assets/images/100.png")}
      title="Get yer free coffee mayte"
      partner="Sunbucks"
    />
  ))
  .add("Reward card (multiple in list)", () => (
    <View style={[s.ph_base]}>
      <RewardCard
        source={require("../assets/images/100.png")}
        title="Get yer free coffee mayte"
        partner="Sunbucks"
      />
      <RewardCard
        source={require("../assets/images/100.png")}
        title="Free Pasty on us!"
        partner="Groggs"
      />
      <RewardCard
        source={require("../assets/images/100.png")}
        title="Free entry to da club"
        partner="Mushroom Bar"
      />
    </View>
  ))
  .add("Fullscreen reward card", () => (
    <RewardCardFullScreen
      code="ADB123"
      codeType="STRING"
      description={`Eiusmod nulla ad adipisicing sunt ullamco magna occaecat deserunt incididunt qui consectetur id laboris. Fugiat aliqua enim adipisicing do et laboris velit reprehenderit elit ad sit veniam tempor. Voluptate amet tempor occaecat excepteur dolore aute ullamco qui minim cupidatat.

Quis do cupidatat commodo consequat est do labore dolor. Cillum excepteur ad elit laborum aliquip esse elit. Consectetur fugiat incididunt nulla exercitation pariatur ullamco eu reprehenderit. Tempor enim duis excepteur ex do Lorem amet reprehenderit duis exercitation in. Proident veniam laborum dolore id est. Qui in non ex adipisicing eiusmod mollit incididunt esse cillum.

Officia magna sunt nisi eu cupidatat laborum laboris tempor reprehenderit do do officia enim nulla. Laborum incididunt Lorem minim et ex tempor sit adipisicing consequat ad. Reprehenderit quis eiusmod ipsum elit aute enim anim ullamco. Quis laboris reprehenderit do est veniam enim ut. Ea ipsum eu officia quis ad nisi. Culpa excepteur aute exercitation occaecat.`}
      logo={require("../assets/images/100.png")}
      partner="Sunbux"
      terms="https://example.com/terms"
      title="Get yer free coffee mayte"
    />
  ))
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
      score={+number("Score", 42, { range: true, min: 0, max: 100, step: 1 })}
      totalDistance={
        +number("Total Miles", 104, {
          range: true,
          min: 100,
          max: 115,
          step: 1,
        })
      }
      journeysCompleted={
        +number("Journeys Completed", 10, {
          range: true,
          min: 1,
          max: 100,
          step: 1,
        })
      }
      dateCompleted={date("Date Completed", new Date(Date.now()))}
    />
  ))
  .add("Block card (multiple in list)", () => (
    <>
      <BlockCard
        score={48}
        totalDistance={103}
        journeysCompleted={12}
        dateCompleted="28/04/19"
      />
      <BlockCard
        score={64}
        totalDistance={101}
        journeysCompleted={16}
        dateCompleted="16/05/19"
      />
      <BlockCard
        score={83}
        totalDistance={104}
        journeysCompleted={12}
        dateCompleted="21/05/19"
      />
    </>
  ));
