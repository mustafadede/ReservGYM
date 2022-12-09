import React from "react";
import { View, Text, Image } from "react-native";

import { useDispatch } from "react-redux";
import { getUserID } from "../../redux/exampleSlicer/exampleSlicer";

import styles from "./style";
import { LinearButton } from "../../components/";
import colorPalette from "../../themes/colors";

const WelcomePage = ({ navigation, route }) => {
  const { userid } = route.params;
  const dispatch = useDispatch();

  dispatch(getUserID(userid));

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/welcome.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Hoşgeldin, {userid}</Text>
        <Text style={styles.text}>Artık hazırsın, hadi hedeflerine {"\n"} birlikte ulaşalım!</Text>
      </View>
      <View style={styles.button}>
        <LinearButton
          colors={[colorPalette.lightRed, colorPalette.darkRed]}
          title={"Profiline Git"}
          onClickHandler={() => {
            dispatch(getUserID(userid));

            navigation.navigate("MemberProfile");
          }}
        />
      </View>
    </View>
  );
};

export default WelcomePage;
