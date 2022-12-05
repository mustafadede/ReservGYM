import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import colorPalette from "../../themes/colors";

const HeaderBar = (props) => {

  const exitButton = () => {
    props.onClickHandler();
  }

  const backButton = () => {
    props.onClickBackHandler();
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity style={!props.back &&
        [{ paddingEnd: 30 }, styles.icon]}
        onPress={backButton}
      >
        {props.back && <Icon name={"arrow-back"} color={colorPalette.black} size={30} />}

      </TouchableOpacity>
      <View>
        <Text style={styles.header}>{props.title}</Text>
      </View>
      <TouchableOpacity
        onPress={exitButton}
        style={!props.exit && { paddingEnd: 30 }}
      >
        {props.exit && <Icon name={"exit"} size={30} color={colorPalette.darkRed} />}
      </TouchableOpacity>
    </View>
  );
};

export { HeaderBar };
