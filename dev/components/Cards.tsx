import React from "react";
import { Image, View, ViewStyle, StyleProp } from "react-native";
import { Text } from "./Base";
import { ScoreMeter } from "./Meters";
import { Icon } from "./Icons";
import s, { COLOUR_ORANGE } from "./Styles";

type MediaObjectProps = {
  leftComponent: React.ReactNode;
  textComponent: React.ReactNode;
  rightComponent?: React.ReactNode;
  style: StyleProp<ViewStyle>;
};

const MediaObject: React.FC<MediaObjectProps> = ({
  leftComponent,
  textComponent,
  rightComponent = null,
  ...props
}: MediaObjectProps) => (
  <View
    style={[
      s.flex_row,
      s.align_center,
      s.bg_white,
      s.overflow_hidden,
      s.rounded,
      s.mb_base,
      props.style,
    ]}
  >
    {leftComponent}
    <View style={[s.flex_1, s.flex_col, s.justify_center, s.p_base]}>
      {textComponent}
    </View>
    {rightComponent}
  </View>
);

type ImageCardProps = {
  sourceUrl: string;
  textComponent: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ImageCard: React.FC<ImageCardProps> = ({
  sourceUrl,
  textComponent,
  ...props
}: ImageCardProps) => (
  <MediaObject
    style={props.style}
    leftComponent={
      <Image
        style={[s.img_thumb_height, s.img_thumb_width]}
        source={{ uri: sourceUrl }}
      />
    }
    textComponent={textComponent}
  />
);

type BlockCardProps = {
  score: number;
  totalDistance: number;
  journeysCompleted: number;
  dateCompleted: string;
  style?: StyleProp<ViewStyle>;
};

const BlockCard: React.FC<BlockCardProps> = ({
  score,
  totalDistance: totalDistance,
  journeysCompleted,
  dateCompleted,
  ...props
}: BlockCardProps) => (
  <MediaObject
    style={props.style}
    leftComponent={
      <View style={[s.p_xs]}>
        <ScoreMeter score={score} size={64} />
      </View>
    }
    textComponent={
      <>
        <Text style={[s.dark, s.base_font_bold]}>
          {totalDistance} total distance
        </Text>
        <Text style={[s.dark]}>
          <Text style={[s.base_font_bold]}>{journeysCompleted}</Text> journeys
          completed
        </Text>
        <Text style={[s.dark]}>
          <Text style={[s.base_font_bold]}>{dateCompleted}</Text> date completed
        </Text>
      </>
    }
    rightComponent={
      <View style={[s.align_center, s.justify_center, s.p_sm]}>
        <Icon
          selectorString="icons/forward"
          color={COLOUR_ORANGE}
          height={32}
          width={32}
        />
      </View>
    }
  />
);

export { ImageCard, BlockCard };
