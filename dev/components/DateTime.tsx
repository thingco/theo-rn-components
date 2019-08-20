import React from "react";
import { Text } from "./Base";

import { unixToDateString, unixToTimeString } from "../lib/date-functions";
import { TextStyle, StyleProp } from "react-native";

type DateTimeProps = {
  timestamp: string | number;
  style?: StyleProp<TextStyle>;
};

const FormattedDate = ({ timestamp, ...props }: DateTimeProps) => (
  <Text style={props.style}>{unixToDateString(timestamp)}</Text>
);

const FormattedTime = ({ timestamp, ...props }: DateTimeProps) => (
  <Text style={props.style}>{unixToTimeString(timestamp)}</Text>
);

export { FormattedDate, FormattedTime };
