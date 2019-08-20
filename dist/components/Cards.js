import React from "react";
import { Image, View } from "react-native";
import { Text } from "./Base";
import { ScoreMeter } from "./Meters";
import { Icon } from "./Icons";
import s, { COLOUR_ORANGE } from "./Styles";
const MediaObject = ({ leftComponent, textComponent, rightComponent = null, ...props }) => (<View style={[
    s.flex_row,
    s.align_center,
    s.bg_white,
    s.overflow_hidden,
    s.rounded,
    s.mb_base,
    props.style,
]}>
    {leftComponent}
    <View style={[s.flex_1, s.flex_col, s.justify_center, s.p_base]}>
      {textComponent}
    </View>
    {rightComponent}
  </View>);
const ImageCard = ({ sourceUrl, textComponent, ...props }) => (<MediaObject style={props.style} leftComponent={<Image style={[s.img_thumb_height, s.img_thumb_width]} source={{ uri: sourceUrl }}/>} textComponent={textComponent}/>);
const BlockCard = ({ score, totalDistance: totalDistance, journeysCompleted, dateCompleted, ...props }) => (<MediaObject style={props.style} leftComponent={<View style={[s.p_xs]}>
        <ScoreMeter score={score} size={64}/>
      </View>} textComponent={<>
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
      </>} rightComponent={<View style={[s.align_center, s.justify_center, s.p_sm]}>
        <Icon selectorString="icons/forward" color={COLOUR_ORANGE} height={32} width={32}/>
      </View>}/>);
export { ImageCard, BlockCard };
//# sourceMappingURL=Cards.js.map