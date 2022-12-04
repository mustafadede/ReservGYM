import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import colorPalette from "../../themes/colors";

const HeaderBar = (props) => {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Icon name={"arrow-back"} color={colorPalette.black} size={30} />
      </View>
      <View>
        <Text style={styles.header}>{props.title}</Text>
      </View>
      <View style={!props.exit && { paddingEnd: 30 }}>{props.exit && <Icon name={"exit"} size={30} color={colorPalette.darkRed} />}</View>
    </View>
  );
};

export { HeaderBar };
