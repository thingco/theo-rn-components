import React from "react";
import { TouchableOpacity, View } from "react-native";
import { BaseText as Text } from "./Base";

import s from "./Styles";

const TabContext = React.createContext(null);

export const TabSwitcher = ({ children, initialTab }) => {
  const [selectedTab, setSelectedTab] = React.useState(initialTab);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <View style={[s.flex_1]}>{children}</View>
    </TabContext.Provider>
  );
};

export const TabBar = ({ children }) => (
  <View style={[s.flex_row, s.justify_between]}>{children}</View>
);

export const Tab = ({ children, name }) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabContext);
  const isSelected = selectedTab === name;

  return (
    <TouchableOpacity
      style={[
        isSelected ? s.border_light : s.border_transparent,
        s.bb_thick,
        s.flex_1,
        s.p_sm,
      ]}
      onPress={() => setSelectedTab(name)}
    >
      <Text
        style={[
          isSelected ? s.base_font_bold : s.base_font,
          s.text_centre,
          s.text_sm,
          s.white,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const TabPanel = ({ children, name }) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabContext);

  if (selectedTab !== name) return null;

  return <View style={[s.flex_1, s.pt_lg]}>{children}</View>;
};
