declare type ButtonType = "close" | "back" | "forward";
declare type IconButtonProps = {
    buttonType: ButtonType;
    size: number;
    color: string;
    onPress?: () => void;
};
declare const IconButton: ({ buttonType, size, color, ...props }: IconButtonProps) => JSX.Element;
export { IconButton };
//# sourceMappingURL=IconButtons.d.ts.map