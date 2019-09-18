import React from "react";
import { ViewStyle, StyleProp, ImageSourcePropType } from "react-native";
import { PillType } from "./Pills";
declare type ImageCardProps = {
    source: ImageSourcePropType;
    textComponent: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * An extension of the media object component specifically for an image/text
 * combination.
 *
 * @param {ImageCardProps}
 */
declare const ImageCard: React.FC<ImageCardProps>;
declare type RewardCardProps = {
    source: ImageSourcePropType;
    title: string;
    partner: string;
    style?: StyleProp<ViewStyle>;
};
/**
 * An extension of the media object component for displaying an overview of a
 * reward, designed for displaying in a list.
 *
 * They have quite specific styling, with punched-out areas giving the
 * visual effect of a ticket). They hold the logo of the reward partner in the
 * left slot, and the reward details in the right slot.
 *
 * @param {RewardCardProps}
 */
declare const RewardCard: React.FC<RewardCardProps>;
declare type RewardCodeType = "STRING" | "URL";
declare type RewardCardFullScreenProps = {
    logo: ImageSourcePropType;
    title: string;
    terms?: string;
    description: string;
    code: string;
    codeType: RewardCodeType;
    partner: string;
    style?: StyleProp<ViewStyle>;
};
/**
 * A full-screen variant of the reward card, used to display detailed information
 * about a reward when a user selects it, along with the code allowing them to
 * claim it.
 *
 * Like the smaller reward card, they have quite specific styling, with
 * punched-out areas giving the visual effect of a ticket). They are not, however,
 * an extension of the media object -- all info is displayed in a column.
 *
 * REVIEW(@DanCouper) This is too specific & should probably be moved into Theo app code.
 */
declare const RewardCardFullScreen: React.FC<RewardCardFullScreenProps>;
declare type BlockCardProps = {
    score: number;
    totalDistance: number;
    journeysCompleted: number;
    dateCompleted: string;
    style?: StyleProp<ViewStyle>;
};
/**
 * An extension of the media object component for displaying an overview of a
 * journey block. This displays an SVG score dial in the left slot, with
 * block details in the text slot and a ponter icon in the right slot.
 *
 * @param {RewardCardProps}
 */
declare const BlockCard: React.FC<BlockCardProps>;
/**
 * An extension of the media object component for displaying an overview of a
 * video.
 */
declare type VideoCardProps = {
    style?: StyleProp<ViewStyle>;
    timestamp: number;
    statusType: PillType;
    statusText: string;
};
declare const VideoCard: React.FC<VideoCardProps>;
export { BlockCard, ImageCard, RewardCard, RewardCardFullScreen, VideoCard };
//# sourceMappingURL=Cards.d.ts.map