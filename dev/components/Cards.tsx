import React from "react";
import {
  Image,
  View,
  ViewStyle,
  ScrollView,
  StyleProp,
  ImageSourcePropType,
  Linking,
} from "react-native";
import { Button } from "./Buttons";
import { FormattedDate, FormattedTime } from "./DateTime";
import { Icon } from "./Icons";
import { Link } from "./Links";
import { PillTinted, PillType } from "./Pills";
import { ScoreMeter } from "./Meters";
import { Text } from "./Base";
import s, { COLOUR_ORANGE } from "./Styles";

type MediaObjectProps = {
  leftComponent: React.ReactNode;
  textComponent: React.ReactNode;
  rightComponent?: React.ReactNode;
  style: StyleProp<ViewStyle>;
};

/**
 * A generic media object, laid out horizontally. Uses render props as "slots"
 * for the content. By convention, the left component will be some media object
 * (_eg_ an image or a map), whilst the central text component will provide
 * some contextual information. The optional right component is used in Theo
 * for an icon or similar.
 *
 * @param {MediaObjectProps}
 */
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
const ImageCard: React.FC<ImageCardProps> = ({
  source,
  textComponent,
  ...props
}: ImageCardProps) => (
  <MediaObject
    style={props.style}
    leftComponent={
      <Image style={[s.img_thumb_height, s.img_thumb_width]} source={source} />
    }
    textComponent={textComponent}
  />
);

type RewardCardProps = {
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
const RewardCard: React.FC<RewardCardProps> = ({
  source,
  title,
  partner,
  ...props
}: RewardCardProps) => (
  <MediaObject
    style={props.style}
    leftComponent={
      <View style={[s.bg_grey]}>
        <Image
          style={[s.img_thumb_height, s.img_thumb_width]}
          source={source}
        />
        <View style={[s.bg_dark, s.punchcut_sm, s.punchcut_sm_top]} />
        <View style={[s.bg_dark, s.punchcut_sm, s.punchcut_sm_bottom]} />
      </View>
    }
    textComponent={
      <React.Fragment>
        <Text style={[s.dark, s.text_lg, s.base_font_bold, s.mb_xs]}>
          {title}
        </Text>
        <Text style={[s.dark]}>with {partner}</Text>
      </React.Fragment>
    }
  />
);

type RewardCodeType = "STRING" | "URL";

type RewardCardFullScreenProps = {
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
const RewardCardFullScreen: React.FC<RewardCardFullScreenProps> = ({
  code,
  codeType,
  description,
  logo,
  partner,
  terms,
  title,
}: RewardCardFullScreenProps) => (
  <ScrollView
    contentContainerStyle={[s.bg_white, s.m_sm, s.rounded, s.overflow_hidden]}
  >
    <View style={[s.flex_col, s.flex_1, s.p_lg, s.align_center]}>
      <Image style={[s.mv_base]} source={logo} />
      <Text style={[s.dark, s.base_font_bold, s.text_xxl, s.dark, s.mb_sm]}>
        {title}
      </Text>
      <Text style={[s.dark, s.mb_base]}>with {partner}</Text>
      <Text style={[s.dark, s.text_sm, s.mb_base, s.flex_1]}>
        {description}
      </Text>
      {terms && (
        <Link style={[s.dark, s.base_font_bold]} url={terms}>
          Terms &amp; Conditions
        </Link>
      )}
    </View>
    <View style={[s.bg_grey, s.flex_col, s.align_center, s.p_lg]}>
      <RewardCode code={code} type={codeType} />
      <View style={[s.punchcut_lg, s.punchcut_lg_left]} />
      <View style={[s.punchcut_lg, s.punchcut_lg_right]} />
    </View>
  </ScrollView>
);

type RewardCodeProps = {
  code: string;
  type: RewardCodeType;
};

const RewardCode: React.FC<RewardCodeProps> = ({
  code,
  type,
}: RewardCodeProps) => {
  switch (type) {
    case "STRING":
      return (
        <Text
          style={[s.base_font_bold, s.text_xxl, s.black, s.spacing_1, s.p_base]}
        >
          {code}
        </Text>
      );
    case "URL":
      return (
        <Button
          style={[s.text_xxl]}
          buttonType="primary"
          onPress={() => Linking.openURL(code)}
        >
          Claim Reward
        </Button>
      );
    default:
      throw new Error(`Unknown reward type (${type})`);
  }
};

type BlockCardProps = {
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
      <React.Fragment>
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
      </React.Fragment>
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

/**
 * An extension of the media object component for displaying an overview of a
 * video.
 */

type VideoCardProps = {
  style?: StyleProp<ViewStyle>;
  timestamp: number;
  statusType: PillType;
  statusText: string;
};

const VideoCard: React.FC<VideoCardProps> = ({
  timestamp,
  statusType,
  statusText,
  ...props
}) => (
  <MediaObject
    style={props.style}
    leftComponent={
      <View
        style={[s.p_xs, s.img_thumb_width, s.align_self_stretch, s.bg_mid]}
      />
    }
    textComponent={
      <React.Fragment>
        <Text style={[s.text_sm, s.dark, s.mb_xs]}>
          <FormattedDate style={[s.text_sm]} timestamp={timestamp} /> at{" "}
          <FormattedTime style={[s.text_sm]} timestamp={timestamp} />
        </Text>
        {/* FIXME(@DanCouper) need to be able to get the location */}
        <Text style={[s.base_font_bold, s.dark, s.mb_base]}>
          STUB: LOCATION HERE
        </Text>
        <PillTinted pillType={statusType}>{statusText}</PillTinted>
      </React.Fragment>
    }
  />
);

export { BlockCard, ImageCard, RewardCard, RewardCardFullScreen, VideoCard };
