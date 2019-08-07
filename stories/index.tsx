import React from "react";

import { storiesOf } from "@storybook/react-native";

import s from "../Styles";
import { Screen } from "../components/Base";

import { Welcome, Colours } from "./storybook-components/Welcome";

import {
  ButtonPrimary,
  ButtonSecondary,
  BackButton,
  CloseButton,
} from "../components/Buttons";

import { Pill, PillOutlined, PillFaded } from "../components/Pills";

import { Link, LinkGroup } from "../components/Links";

import {
  Buttons,
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

storiesOf("UI Controls", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("buttons", () => <Buttons />)
  .add("pills", () => <Pills />)
  .add("profile menu", () => <Profile />)
  .add("tabs", () => <Tabs />)
  .add("tabscroller", () => <TabScroller />);

storiesOf("Content Blocks", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("image card", () => <ImageCard />)
  .add("score block cards", () => <ScoreBlockCard />);

storiesOf("Individual Components", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .add("primary button", () => <ButtonPrimary>Press Me</ButtonPrimary>)
  .add("secondary button", () => <ButtonSecondary>Press Me</ButtonSecondary>)
  .add("back button", () => (
    <BackButton navigation={{ goBack: () => void 0 }} />
  ))
  .add("close button", () => (
    <CloseButton navigation={{ goBack: () => void 0 }} />
  ))
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
