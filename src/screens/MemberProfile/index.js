import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Member, MemberInfo } from "../../components";
import styles from "./style";
// import LinearButton from "../../components/linearButton/linearButton";
// import colorPalette from "../../themes/colors";
// import Icon from "react-native-vector-icons/FontAwesome";
// import LinearGradient from "react-native-linear-gradient";

const MemberProfile = () => {
  return (
    <View style={styles.main}>
      <Member style={styles.member} />
      <MemberInfo />
      {/* <View style={styles.buttonLinearContainer}>
        <View style={styles.buttonLinear}>
          <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Rezervasyonlarım"} />
        </View>
        <View style={styles.buttonLinear}>
          <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Ödeme Yap"} />
        </View>
      </View>
      <TouchableOpacity onPress={null}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colorPalette.lightRed, colorPalette.darkRed]} style={styles.buttonCircular}>
          <Text style={{ color: colorPalette.white, fontWeight: "bold" }}>
            <Icon name="camera" size={30} />
          </Text>
        </LinearGradient>
      </TouchableOpacity> */}
    </View>
  );
};

export default MemberProfile;
