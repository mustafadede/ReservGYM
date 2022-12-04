import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import { HeaderBar, LinearButton } from "../../components/";
import colorPalette from "../../themes/colors";

const WelcomePage = () => {
  return (
    <View>
      <HeaderBar title={"Welcome"} />
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/welcome.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Hoşgeldin, Stefani</Text>
          <Text style={styles.text}>Artık hazırsın, hadi hedeflerine {"\n"} birlikte ulaşalım!</Text>
        </View>
        <View style={styles.button}>
          <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Ana Sayfaya Git"} />
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
