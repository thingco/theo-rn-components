import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./Base";
import s from "./Styles";
const TabContext = React.createContext({});
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
/**
 * The context provider component for a tab interface. The tab components must
 * always be wrapped in this, as it specifies the currently selected tab. And
 * the name of the initially-selected tab must be passed as a parameter.
 */
const TabSwitcher = ({ children, initialTab, ...props }) => {
    const [selectedTab, setSelectedTab] = React.useState(initialTab);
    return (<TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <View style={[s.flex_1, props.style]}>{children}</View>
    </TabContext.Provider>);
};
/**
 * The tab bar is the container for a set of tabs. It provides a hook for styling,
 * nothing more, allowing the tabs to be laid out in a row.
 */
const TabBar = ({ children, ...props }) => (<View style={[s.flex_row, s.justify_between, props.style]}>{children}</View>);
/**
 * The control for a tab, specified by name. Pressing on the control loads in
 * the respective tab panel. And when the matching tab panel is active, the tab
 * becomes highlighted.
 */
const Tab = ({ children, name }) => {
    const { selectedTab, setSelectedTab } = useTabContext();
    const isSelected = selectedTab === name;
    return (<TouchableOpacity style={[
        isSelected ? s.border_light : s.border_transparent,
        s.bb_thick,
        s.flex_1,
        s.p_sm,
    ]} onPress={() => setSelectedTab(name)}>
      <Text style={[
        isSelected ? s.base_font_bold : s.base_font,
        s.text_centre,
        s.text_lg,
        s.white,
    ]}>
        {children}
      </Text>
    </TouchableOpacity>);
};
/**
 * The container for tab panel content, which can be anything. A name needs to
 * be specified, matching that of a specific tab.
 */
const TabPanel = ({ children, name, ...props }) => {
    const { selectedTab } = useTabContext();
    if (selectedTab !== name) {
        return null;
    }
    return <View style={[s.flex_1, s.pt_lg, props.style]}>{children}</View>;
};
export { Tab, TabBar, TabPanel, TabSwitcher };
//# sourceMappingURL=Tabs.js.map