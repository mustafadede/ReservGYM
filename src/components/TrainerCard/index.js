import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./style";

const TrainerCard = ({ title, subTitle, handlePresentModalPress, setReservation }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.trainerCardWrapper}
        onPress={() => {
          setReservation();
          handlePresentModalPress();
        }}
      >
        <Image source={require("../../assets/profilePic.png")} resizeMode="cover" style={styles.trainerImage} />
        <View style={styles.trainerCardTitlesWrapper}>
          <Text style={styles.trainerCardTitleMain}>{title}</Text>
          <Text style={styles.trainerCardTitleSub}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export { TrainerCard };
