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

function useTabContext() {
  const tabContext = React.useContext(TabContext);

  if (tabContext == undefined) {
    throw new Error(`
The useTabContext hook must be used within a TabContext Provider: the Tab
components cannot function without being wrapped in this.
    `);
  }

  return tabContext;
}

type TabSwitcherProps = {
  initialTab: CurrentTabName;
  children: {
    TabBar: React.ReactNode;
    TabPanel: React.ReactNode;
  };
  style?: StyleProp<ViewStyle>;
};

/**
 * The context provider component for a tab interface. The tab components must
 * always be wrapped in this, as it specifies the currently selected tab. And
 * the name of the initially-selected tab must be passed as a parameter.
 */
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

/**
 * The tab bar is the container for a set of tabs. It provides a hook for styling,
 * nothing more, allowing the tabs to be laid out in a row.
 */
const TabBar: React.FC<TabBarProps> = ({ children, ...props }: TabBarProps) => (
  <View style={[s.flex_row, s.justify_between, props.style]}>{children}</View>
);

type TabProps = {
  children: React.ReactNode;
  name: CurrentTabName;
};

/**
 * The control for a tab, specified by name. Pressing on the control loads in
 * the respective tab panel. And when the matching tab panel is active, the tab
 * becomes highlighted.
 */
const Tab: React.FC<TabProps> = ({ children, name }: TabProps) => {
  const { selectedTab, setSelectedTab } = useTabContext();
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
          s.text_lg,
          s.white,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

type TabPanelProps = {
  children: React.ReactNode[];
  name: CurrentTabName;
  style?: StyleProp<ViewStyle>;
};

/**
 * The container for tab panel content, which can be anything. A name needs to
 * be specified, matching that of a specific tab.
 */
const TabPanel: React.FC<TabPanelProps> = ({
  children,
  name,
  ...props
}: TabPanelProps) => {
  const { selectedTab } = useTabContext();

  if (selectedTab !== name) {
    return null;
  }

  return <View style={[s.flex_1, s.pt_lg, props.style]}>{children}</View>;
};

export { Tab, TabBar, TabPanel, TabSwitcher };
