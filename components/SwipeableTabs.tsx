/**
 * See https://snack.expo.io/H1CnjIeDb
 * See https://stackoverflow.com/questions/39849648/horizontal-scrollview-snapping-react-native
 *
 * TODO(@DanCouper) make this work properly
 *
 * A solution that uses nothing but RN builtins can be constructed using
 * ScrollView with horizontal scrolling. How to deal with the tabs is up in
 * the air at the minute. And it should really use FlatList instead for
 * the perf optimisations.
 */
import React from "react";
import { useDimensions } from "../hooks/use-dimensions";
import { ScrollView, View } from "react-native";

import s from "../Styles";

export const Scroller = ({ children }) => {
  const { width: screenWidth } = useDimensions();

  return (
    <ScrollView
      bounces={false}
      horizontal={true}
      decelerationRate={0.8}
      snapToInterval={screenWidth}
      snapToAlignment={"center"}
    >
      {children}
    </ScrollView>
  );
};

export const ScrollerPanel = ({ children, name }) => {
  const { width } = useDimensions();
  return <View style={[s.pt_lg, { width }]}>{children}</View>;
};
