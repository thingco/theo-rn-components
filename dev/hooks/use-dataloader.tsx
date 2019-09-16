import React from "react";
import { ActivityIndicator } from "react-native";
import { Text } from "../components/Base";
import s from "../components/Styles";

/**
 * Good start but:
 * - ZeroState? Poss just in the actual DataLoader component
 * - Dispatch success to store
 * - following on from this, do not need to send the data to che children
 *   of the dataloader component, as it will just read the Redux store state.
 * - following on from this, do not need to necessarily include initial state,
 *   as the state, initial or otherwise, is just whatever the store state is.
 * - Need to wrap the ActivityIndicator component
 * - Need an error component? Again, this can just be a dispatch to the Redux
 *   store, but probably simpler to keep error state as close to the component
 *   that triggered it as possible.
 *
 * @param apiCall - API call wrapped in a thunk
 * @param initialState
 */

export function useDataloader(apiCall, initialState) {
  const [data, setData] = React.useState(initialState);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function loadData() {
    try {
      setLoading(true);
      const apiData = await apiCall();

      setData(apiData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    loadData();
  }, [apiCall]);

  return { data, error, loading };
}

export const DataLoader = ({ apiCall, initialState = null, children }) => {
  const { data, error, loading } = useDataloader(apiCall, initialState);

  if (loading) {
    return <ActivityIndicator size="small" color="#FF6D37" />;
  } else if (error) {
    return <Text style={[s.white]}>{JSON.stringify(error)}</Text>;
  }

  return children(data);
};
