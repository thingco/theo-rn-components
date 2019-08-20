import { TextStyle, StyleProp } from "react-native";
declare type DateTimeProps = {
    timestamp: string | number;
    style?: StyleProp<TextStyle>;
};
declare const FormattedDate: ({ timestamp, ...props }: DateTimeProps) => JSX.Element;
declare const FormattedTime: ({ timestamp, ...props }: DateTimeProps) => JSX.Element;
export { FormattedDate, FormattedTime };
//# sourceMappingURL=DateTime.d.ts.map