import React from "react";
import { View } from "react-native";
import s from "../Styles";

import { BaseText as Text } from "../components/Base";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonWarning,
} from "../components/Controls";
import { ProfileMenu } from "../components/Profile";
import { Tab, TabBar, TabPanel, TabSwitcher } from "../components/Tabs";
import { Scroller, ScrollerPanel } from "../components/SwipeableTabs";

const dummyPress = () => void 0;

export const Buttons = () => (
  <>
    <ButtonPrimary style={[s.mv_base]} onPress={dummyPress}>
      Primary Button
    </ButtonPrimary>
    <ButtonSecondary style={[s.mv_base]} onPress={dummyPress}>
      Secondary Button
    </ButtonSecondary>
    <ButtonWarning style={[s.mv_base]} onPress={dummyPress}>
      Warning Button
    </ButtonWarning>
  </>
);

const exampleMenuItems = [
  {
    icon: "icons/profile",
    onPress: () => void 0,
    text: "Update personal details",
  },
  {
    icon: "icons/video",
    onPress: () => void 0,
    text: "Video Requests",
  },
  { icon: "icons/measure", onPress: () => void 0, text: "Change Units" },
  {
    icon: "icons/lock",
    onPress: () => void 0,
    text: "Data Sharing Preferences",
  },
  {
    icon: "icons/key",
    onPress: () => void 0,
    text: "Login Preferences",
  },
];

export const ExampleProfile = () => (
  <ProfileMenu menuItems={exampleMenuItems} />
);

export const ExampleTabs = () => (
  <TabSwitcher initialTab="foo">
    <TabBar>
      <Tab name="foo">Foo</Tab>
      <Tab name="bar">Bar</Tab>
      <Tab name="baz">Baz</Tab>
    </TabBar>
    <TabPanel name="foo">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        soluta quisquam itaque nulla possimus quibusdam consequatur corrupti,
        nam eveniet quis dolores doloribus et officia alias? Hic laboriosam
        tempora obcaecati error.
      </Text>
    </TabPanel>
    <TabPanel name="bar">
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eos
        suscipit omnis ipsa. Hic commodi cum veritatis perferendis ullam
        quibusdam dolor aliquam voluptatem nihil corporis quaerat, nulla nostrum
        omnis nisi!
      </Text>
    </TabPanel>
    <TabPanel name="baz">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab
        sint sapiente ullam dolor quasi illum, ducimus vitae asperiores nobis
        saepe quod modi quidem accusamus, ratione dolore provident vel odio?
      </Text>
    </TabPanel>
  </TabSwitcher>
);

export const ExampleTabScroller = () => (
  <Scroller>
    <ScrollerPanel name="foo">
      <Text>Foo</Text>
    </ScrollerPanel>
    <ScrollerPanel name="bar">
      <Text>Bar</Text>
    </ScrollerPanel>
    <ScrollerPanel name="baz">
      <Text>Baz</Text>
    </ScrollerPanel>
  </Scroller>
);
