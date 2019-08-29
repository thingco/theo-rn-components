import React from "react";
const defaultPreferences = {
    locale: "en-GB",
    units: "I",
};
const StateContext = React.createContext({});
const DispatchContext = React.createContext(undefined);
export function preferencesReducer(state, action) {
    switch (action.type) {
        case "USE_IMPERIAL":
            return { ...state, units: "I" };
        case "USE_METRIC":
            return { ...state, units: "M" };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
const PreferencesProvider = ({ children, }) => {
    const [preferences, updatePreferences] = React.useReducer(preferencesReducer, defaultPreferences);
    return (<StateContext.Provider value={preferences}>
      <DispatchContext.Provider value={updatePreferences}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>);
};
function usePreferences() {
    const preferences = React.useContext(StateContext);
    // tslint:disable:triple-equals
    if (preferences == undefined) {
        // tslint:disable:no-console
        console.warn(`
The usePreferences hook should be used within a PreferencesProvider.
As this is not the case, the preferences have been set to these default values:

${JSON.stringify(defaultPreferences, null, 2)}

Please modify the app code to include a PreferencesProvider near the top of the
component tree.
    `);
        return defaultPreferences;
    }
    return preferences;
}
function usePreferencesUpdater() {
    const updatePreferences = React.useContext(DispatchContext);
    // tslint:disable:triple-equals
    if (updatePreferences == undefined) {
        throw new Error(`
The usePreferencesUpdater hook must be used within a PreferencesProvider: it
makes no sense to dispatch actions to adjust the preferences when those
preferences do not exist.

Please modify the app code to include a PreferencesProvider near the top of the
component tree.
    `);
    }
    return updatePreferences;
}
export { PreferencesProvider, usePreferences, usePreferencesUpdater };
//# sourceMappingURL=use-preferences.js.map