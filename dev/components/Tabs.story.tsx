import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Screen, Text } from "./Base";
import { Tab, TabBar, TabPanel, TabSwitcher } from "./Tabs";
import s from "./Styles";

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("Tabs interface", () => (
    <TabSwitcher initialTab="foo">
      <TabBar>
        <Tab name="foo">Foo</Tab>
        <Tab name="bar">Bar</Tab>
        <Tab name="baz">Baz</Tab>
      </TabBar>
      <TabPanel name="foo">
        <Text style={[s.p_lg, s.white]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          soluta quisquam itaque nulla possimus quibusdam consequatur corrupti,
          nam eveniet quis dolores doloribus et officia alias? Hic laboriosam
          tempora obcaecati error.
        </Text>
      </TabPanel>
      <TabPanel name="bar">
        <Text style={[s.p_lg, s.white]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eos
          suscipit omnis ipsa. Hic commodi cum veritatis perferendis ullam
          quibusdam dolor aliquam voluptatem nihil corporis quaerat, nulla
          nostrum omnis nisi!
        </Text>
      </TabPanel>
      <TabPanel name="baz">
        <Text style={[s.p_lg, s.white]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab
          sint sapiente ullam dolor quasi illum, ducimus vitae asperiores nobis
          saepe quod modi quidem accusamus, ratione dolore provident vel odio?
        </Text>
      </TabPanel>
    </TabSwitcher>
  ));
