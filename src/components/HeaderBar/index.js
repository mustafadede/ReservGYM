import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import colorPalette from "../../themes/colors";

const HeaderBar = (props) => {
  return (
    <View style={styles.row}>
      <Icon name={"arrow-back"} color={colorPalette.black} size={30} />
      <Text style={styles.header}>{props.title}</Text>
      <Text style={styles.header}>...</Text>
    </View>
  );
};

export default HeaderBar;
