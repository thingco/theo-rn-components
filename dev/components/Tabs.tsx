import React from "react";
import { TouchableOpacity, View, ViewStyle, StyleProp } from "react-native";
import { Text } from "./Base";

import s from "./Styles";

type CurrentTabName = string;

type TabContextValue = {
  selectedTab: string;
  setSelectedTab: (name: string) => void;
};

const TabContext = React.createContext<TabContextValue>({} as TabContextValue);

type TabSwitcherProps = {
  initialTab: CurrentTabName;
  children: {
    TabBar: React.ReactNode;
    TabPanel: React.ReactNode;
  };
  style?: StyleProp<ViewStyle>;
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  children,
  initialTab,
  ...props
}: TabSwitcherProps) => {
  const [selectedTab, setSelectedTab] = React.useState(initialTab);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <View style={[s.flex_1, props.style]}>{children}</View>
    </TabContext.Provider>
  );
};

type TabBarProps = {
  children: {
    Tab: React.ReactNode;
  };
  style?: StyleProp<ViewStyle>;
};

const TabBar: React.FC<TabBarProps> = ({ children, ...props }: TabBarProps) => (
  <View style={[s.flex_row, s.justify_between, props.style]}>{children}</View>
);

type TabProps = {
  children: React.ReactNode;
  name: CurrentTabName;
};

const Tab: React.FC<TabProps> = ({ children, name }: TabProps) => {
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

type TabPanelProps = {
  children: React.ReactNode;
  name: CurrentTabName;
  style?: StyleProp<ViewStyle>;
};

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  name,
  ...props
}: TabPanelProps) => {
  const { selectedTab } = React.useContext(TabContext);

  if (selectedTab !== name) {
    return null;
  }

  return <View style={[s.flex_1, s.pt_lg, props.style]}>{children}</View>;
};

export { Tab, TabBar, TabPanel, TabSwitcher };
