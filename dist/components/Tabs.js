import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./Base";
import s from "./Styles";
const TabContext = React.createContext({});
const TabSwitcher = ({ children, initialTab, ...props }) => {
    const [selectedTab, setSelectedTab] = React.useState(initialTab);
    return (<TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <View style={[s.flex_1, props.style]}>{children}</View>
    </TabContext.Provider>);
};
const TabBar = ({ children, ...props }) => (<View style={[s.flex_row, s.justify_between, props.style]}>{children}</View>);
const Tab = ({ children, name }) => {
    const { selectedTab, setSelectedTab } = React.useContext(TabContext);
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
        s.text_sm,
        s.white,
    ]}>
        {children}
      </Text>
    </TouchableOpacity>);
};
const TabPanel = ({ children, name, ...props }) => {
    const { selectedTab } = React.useContext(TabContext);
    if (selectedTab !== name) {
        return null;
    }
    return <View style={[s.flex_1, s.pt_lg, props.style]}>{children}</View>;
};
export { Tab, TabBar, TabPanel, TabSwitcher };
//# sourceMappingURL=Tabs.js.map