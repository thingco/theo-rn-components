import React from "react";
import { TouchableOpacity, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Screen, Text } from "./Base";
import {
  NavIconButton,
  NavSpacerLeft,
  NavSpacerRight,
  NavTextButton,
  NavTitle,
} from "./NavButtons";
import s from "./Styles";

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_start, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("Nav Header Variations", () => (
    <>
      <View style={[s.flex_row, s.align_center, s.pv_sm, s.mb_base]}>
        <NavTextButton buttonAlignment="left" onPress={() => void 0}>
          Left
        </NavTextButton>
        <NavTitle>Title Text</NavTitle>
        <NavTextButton buttonAlignment="right" onPress={() => void 0}>
          Right
        </NavTextButton>
      </View>

      <View style={[s.flex_row, s.align_center, s.pv_sm, s.mb_base]}>
        <NavIconButton
          buttonAlignment="left"
          onPress={() => void 0}
          buttonType="close"
        />
        <NavTitle>Icons (both sides)</NavTitle>
        <NavIconButton
          buttonAlignment="right"
          onPress={() => void 0}
          buttonType="forward"
        />
      </View>

      <View style={[s.flex_row, s.align_center, s.pv_sm, s.mb_base]}>
        <NavIconButton
          buttonAlignment="left"
          onPress={() => void 0}
          buttonType="close"
        />
        <NavTitle>Icon on left</NavTitle>
        <NavSpacerRight />
      </View>

      <View style={[s.flex_row, s.align_center, s.pv_sm, s.mb_base]}>
        <NavSpacerLeft />
        <NavTitle>Icon on right</NavTitle>
        <NavIconButton
          buttonAlignment="right"
          onPress={() => void 0}
          buttonType="forward"
        />
      </View>
    </>
  ));
