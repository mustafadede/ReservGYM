import { View, TextInput, Image } from "react-native";
import React from "react";
import styles from "./style";
import HeaderBar from "../../components/HeaderBar";
import LinearButton from "../../components/linearButton/linearButton";
import colorPalette from "../../themes/colors";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title={"Rezervasyonlarım"} />
      <Image style={styles.creditCard} source={require("../../assets/creditCard.png")} />
      <View style={styles.creditCardForm}>
        <TextInput style={styles.input} placeholder="Name and Surname" placeholderTextColor="lightgray" />
        <TextInput style={styles.input} placeholder="Credit card number" placeholderTextColor="lightgray" />
        <TextInput style={styles.input} placeholder="MM/YY" placeholderTextColor="lightgray" />
        <TextInput style={styles.input} placeholderTextColor="lightgray" placeholder="CVV" />
        <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Kaydet"} />
      </View>
    </View>
  );
};

export default PaymentScreen;
