import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colorPalette from "../../themes/colors";

import { W } from "../../utils/ui/dimension";
import styles from "./style";

const LinearButton = (props) => {
  const onPress = () => {
    props.onClickHandler();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={props.colors} style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { LinearButton };
