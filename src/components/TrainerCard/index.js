import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const TrainerCard = ({ title, subTitle, handlePresentModalPress }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.trainerCardWrapper}
        onPress={handlePresentModalPress}
      >
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/100048051?v=4",
          }}
          resizeMode="cover"
          style={styles.trainerImage}
        />
        <View style={styles.trainerCardTitlesWrapper}>
          <Text style={styles.trainerCardTitleMain}>{title}</Text>
          <Text style={styles.trainerCardTitleSub}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default TrainerCard;
