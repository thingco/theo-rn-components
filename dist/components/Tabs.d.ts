import React from "react";
import { ViewStyle, StyleProp } from "react-native";
declare type CurrentTabName = string;
declare type TabSwitcherProps = {
    initialTab: CurrentTabName;
    children: {
        TabBar: React.ReactNode;
        TabPanel: React.ReactNode;
    };
    style?: StyleProp<ViewStyle>;
};
/**
 * The context provider component for a tab interface.
 *
 * @param {TabSwitcherProps} props
 */
declare const TabSwitcher: React.FC<TabSwitcherProps>;
declare type TabBarProps = {
    children: {
        Tab: React.ReactNode;
    };
    style?: StyleProp<ViewStyle>;
};
declare const TabBar: React.FC<TabBarProps>;
declare type TabProps = {
    children: React.ReactNode;
    name: CurrentTabName;
};
declare const Tab: React.FC<TabProps>;
declare type TabPanelProps = {
    children: React.ReactNode;
    name: CurrentTabName;
    style?: StyleProp<ViewStyle>;
};
declare const TabPanel: React.FC<TabPanelProps>;
export { Tab, TabBar, TabPanel, TabSwitcher };
//# sourceMappingURL=Tabs.d.ts.map