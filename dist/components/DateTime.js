import React from "react";
import { Text } from "./Base";
import { unixToDateString, unixToTimeString } from "../lib/date-functions";
const FormattedDate = ({ timestamp, ...props }) => (<Text style={props.style}>{unixToDateString(timestamp)}</Text>);
const FormattedTime = ({ timestamp, ...props }) => (<Text style={props.style}>{unixToTimeString(timestamp)}</Text>);
export { FormattedDate, FormattedTime };
//# sourceMappingURL=DateTime.js.map