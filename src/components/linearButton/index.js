import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colorPalette from "../../themes/colors";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../redux/exampleSlicer/exampleSlicer";
import { styles } from "./style";

const LinearButton = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(changeName())}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={props.colors}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;
