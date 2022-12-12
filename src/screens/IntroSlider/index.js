import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Lottie from "lottie-react-native";

import styles from "./style";
import colorPalette from "../../themes/colors";

const _renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.lottieWrapper}>
        <Lottie source={item.image} style={styles.lottieView} resizemode={"center"} autoPlay loop />
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const _renderNextButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Icon name={"arrow-forward-circle-sharp"} color={colorPalette.lightRed} size={70} />
    </View>
  );
};

const _renderDoneButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Icon name={"checkmark-done-circle-sharp"} color={colorPalette.lightRed} size={70} />
    </View>
  );
};

export { _renderItem, _renderNextButton, _renderDoneButton };
