import React from "react";
import { Animated, View, Dimensions } from "react-native";
import {
  ModalProvider,
  useModalState,
  useModalDispatch,
} from "./ModalProvider";

import s from "./Styles";

const { height } = Dimensions.get("window");

export const Modal = ({ setModalVisible, children }) => {
  const state = useModalState();
  const dispatch = useModalDispatch();

  const opacity = React.useRef(new Animated.Value(0));
  // const yPosition = React.useRef(new Animated.Value(height));

  React.useEffect(() => {
    switch (state) {
      case state[0]:
        Animated.timing(opacity.current, { toValue: 0.8, duration: 600 }).start(
          () => dispatch("show_modal")
        );
      case state[2]:
        Animated.timing(opacity.current, { toValue: 0, duration: 375 }).start(
          () => setModalVisible(false)
        );
      default:
    }
  }, [state]);

  return (
    <ModalProvider>
      <View
        style={[
          s.flex_1,
          {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
          },
        ]}
      >
        <Animated.View
          style={[
            s.bg_dark,
            s.flex_1,
            s.justify_center,
            s.p_base,
            { opacity: opacity.current },
          ]}
        >
          <View style={[s.align_stretch, s.p_base, s.bg_mid]}>{children}</View>
        </Animated.View>
      </View>
    </ModalProvider>
  );
};
