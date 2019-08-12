import React from "react";
import { View } from "react-native";
import s from "../components/Styles";

import { BaseText as Text } from "../components/Base";

import { Pill, PillOutlined, PillFaded } from "../components/Pills";
import { ProfileMenu } from "../components/Profile";
import { Tab, TabBar, TabPanel, TabSwitcher } from "../components/Tabs";
import { Scroller, ScrollerPanel } from "../components/SwipeableTabs";

const dummyPress = () => void 0;

export const Pills = () => (
  <>
    <View style={[s.flex_row, s.justify_between, s.mb_base]}>
      <Pill pillType="primary">Primary</Pill>
      <Pill pillType="contrast">Secondary</Pill>
      <Pill pillType="warning">Tertiary</Pill>
    </View>
    <View style={[s.flex_row, s.justify_between, s.mb_base]}>
      <PillOutlined pillType="primary">Primary</PillOutlined>
      <PillOutlined pillType="contrast">Secondary</PillOutlined>
      <PillOutlined pillType="warning">Tertiary</PillOutlined>
    </View>
    <View style={[s.flex_row, s.justify_between, s.mb_base]}>
      <PillFaded pillType="primary">Primary</PillFaded>
      <PillFaded pillType="contrast">Secondary</PillFaded>
      <PillFaded pillType="warning">Tertiary</PillFaded>
    </View>
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
