import React from "react";
import { ViewStyle, StyleProp } from "react-native";
declare type ImageCardProps = {
    sourceUrl: string;
    textComponent: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const ImageCard: React.FC<ImageCardProps>;
declare type BlockCardProps = {
    score: number;
    totalDistance: string;
    journeysCompleted: number;
    dateCompleted: string;
    style?: StyleProp<ViewStyle>;
};
declare const BlockCard: React.FC<BlockCardProps>;
export { ImageCard, BlockCard };
//# sourceMappingURL=Cards.d.ts.map