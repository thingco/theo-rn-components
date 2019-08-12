import React from "react";

import { storiesOf } from "@storybook/react-native";
import {
  withKnobs,
  optionsKnob as options,
  select,
  text,
  boolean,
  number,
} from "@storybook/addon-knobs";

import s from "../components/Styles";
import { Screen } from "../components/Base";

import { Welcome, Colours } from "../components/_storybook/Welcome";

import { Button } from "../components/Buttons";

import { Pill, PillOutlined, PillFaded } from "../components/Pills";

import { Link, LinkGroup } from "../components/Links";

import {
  Pills,
  ExampleProfile as Profile,
  ExampleTabs as Tabs,
  ExampleTabScroller as TabScroller,
} from "./Controls";

import {
  ExampleImageCard as ImageCard,
  ExampleScoreBlockCard as ScoreBlockCard,
} from "./Content";

storiesOf("Welcome", module)
  .add("Overview", () => <Welcome />)
  .add("Brand Colours", () => <Colours />);

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("standard text buttons", () => (
    <Button
      disabled={boolean("Disabled?", false)}
      type={select(
        "Type",

  .add("pill", () => <Pill pillType="contrast">2</Pill>)
  .add("outlined pill", () => (
    <PillOutlined pillType="primary">Outlined pill</PillOutlined>
  ))
  .add("faded pill", () => <PillFaded pillType="primary">Faded Pill</PillFaded>)
  .add("link", () => <Link onPress={() => void 0}>I'm a link</Link>)
  .add("link group", () => (
    <LinkGroup
      links={[
        { onPress: () => void 0, linkText: "Link 1" },
        { onPress: () => void 0, linkText: "Link 2" },
        { onPress: () => void 0, linkText: "Link 3" },
      ]}
    />
  ));

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("tabs", () => <Tabs />)
  .add("tabscroller", () => <TabScroller />)
  .add("image cards", () => <ImageCard />)
  .add("score block cards", () => <ScoreBlockCard />);
