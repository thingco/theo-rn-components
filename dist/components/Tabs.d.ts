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
 * The context provider component for a tab interface. The tab components must
 * always be wrapped in this, as it specifies the currently selected tab. And
 * the name of the initially-selected tab must be passed as a parameter.
 */
declare const TabSwitcher: React.FC<TabSwitcherProps>;
declare type TabBarProps = {
    children: {
        Tab: React.ReactNode;
    };
    style?: StyleProp<ViewStyle>;
};
/**
 * The tab bar is the container for a set of tabs. It provides a hook for styling,
 * nothing more, allowing the tabs to be laid out in a row.
 */
declare const TabBar: React.FC<TabBarProps>;
declare type TabProps = {
    children: React.ReactNode;
    name: CurrentTabName;
};
/**
 * The control for a tab, specified by name. Pressing on the control loads in
 * the respective tab panel. And when the matching tab panel is active, the tab
 * becomes highlighted.
 */
declare const Tab: React.FC<TabProps>;
declare type TabPanelProps = {
    children: React.ReactNode[];
    name: CurrentTabName;
    style?: StyleProp<ViewStyle>;
};
/**
 * The container for tab panel content, which can be anything. A name needs to
 * be specified, matching that of a specific tab.
 */
declare const TabPanel: React.FC<TabPanelProps>;
export { Tab, TabBar, TabPanel, TabSwitcher };
//# sourceMappingURL=Tabs.d.ts.map