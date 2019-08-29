import React from "react";
declare type DistanceUnits = "I" | "M";
declare type Locale = "en-GB";
declare type Preferences = {
    units: DistanceUnits;
    locale: Locale;
};
declare type ActionType = "USE_IMPERIAL" | "USE_METRIC";
declare type Action = {
    type: ActionType;
    payload?: any;
};
declare type UpdatePreferences = (action: Action) => void;
export declare function preferencesReducer(state: Preferences, action: Action): Preferences;
declare type PreferencesProviderProps = {
    children: React.ReactNode;
};
declare const PreferencesProvider: React.FC<PreferencesProviderProps>;
declare function usePreferences(): Preferences;
declare function usePreferencesUpdater(): UpdatePreferences;
export { PreferencesProvider, usePreferences, usePreferencesUpdater };
//# sourceMappingURL=use-preferences.d.ts.map