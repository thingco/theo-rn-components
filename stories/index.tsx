import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { themes } from "@storybook/theming";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { CenterView } from "./storybook-components/CenterView";
import { Welcome, Colours } from "./storybook-components/Welcome";

import {
  ButtonPrimary,
  ButtonSecondary,
  BackButton,
  CloseButton,
  Link,
  LinkGroup,
} from "../components/Controls";

storiesOf("Welcome", module)
  .add("Overview", () => <Welcome />)
  .add("Brand Colours", () => <Colours />);

storiesOf("Controls", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("primary button", () => <ButtonPrimary>Press Me</ButtonPrimary>)
  .add("secondary button", () => <ButtonSecondary>Press Me</ButtonSecondary>)
  .add("back button", () => (
    <BackButton navigation={{ goBack: () => void 0 }} />
  ))
  .add("close button", () => (
    <CloseButton navigation={{ goBack: () => void 0 }} />
  ))
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
