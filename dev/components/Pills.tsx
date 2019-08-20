import React from "react";

import { Text } from "./Base";
import s, { FONT_SIZE_SMALL } from "./Styles";
import { TextStyle, StyleProp } from "react-native";

type PillType = "primary" | "contrast" | "warning";

type PillProps = {
  children: React.ReactNode;
  pillType: PillType;
  style?: StyleProp<TextStyle>;
};

const basePillStyles = [
  s.base_font_bold,
  s.text_sm,
  s.bold,
  s.overflow_hidden,
  s.pv_xs,
  s.ph_base,
  s.spacing_half,
  s.text_centre,
  { borderRadius: FONT_SIZE_SMALL },
];

function pillStyle(pillType: PillType): TextStyle[] {
  switch (pillType) {
    case "primary":
      return [...basePillStyles, s.white, s.bg_light];
    case "contrast":
      return [...basePillStyles, s.white, s.bg_contrast];
    case "warning":
      return [...basePillStyles, s.dark, s.bg_warning];
  }
}

const Pill: React.FC<PillProps> = ({
  pillType,
  children,
  ...props
}: PillProps) => (
  <Text style={[...pillStyle(pillType), props.style]}>{children}</Text>
);

function pillOutlineStyle(pillType: PillType): TextStyle[] {
  switch (pillType) {
    case "primary":
      return [...basePillStyles, s.border_2, s.light, s.border_light];
    case "contrast":
      return [...basePillStyles, s.border_2, s.contrast, s.border_contrast];
    case "warning":
      return [...basePillStyles, s.border_2, s.warning, s.border_warning];
  }
}

const PillOutlined: React.FC<PillProps> = ({
  pillType,
  children,
  ...props
}: PillProps) => (
  <Text style={[...pillOutlineStyle(pillType), props.style]}>{children}</Text>
);

function pillTintedStyle(pillType: PillType): TextStyle[] {
  switch (pillType) {
    case "primary":
      return [...basePillStyles, s.dark, s.bg_light_tinted];
    case "contrast":
      return [...basePillStyles, s.dark, s.bg_contrast_tinted];
    case "warning":
      return [...basePillStyles, s.dark, s.bg_warning_tinted];
  }
}

const PillTinted: React.FC<PillProps> = ({
  pillType,
  children,
  ...props
}: PillProps) => (
  <Text style={[...pillTintedStyle(pillType), props.style]}>{children}</Text>
);

export { Pill, PillOutlined, PillTinted };
