import { View, TextInput, Image, KeyboardAvoidingView } from "react-native";
import React from "react";
import styles from "./style";
import { LinearButton, HeaderBar } from "../../components/";
import colorPalette from "../../themes/colors";

const PaymentScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderBar title={"Rezervasyonlarım"} />
      <Image style={styles.creditCard} source={require("../../assets/creditCard.png")} />
      <View style={styles.creditCardForm}>
        <TextInput style={styles.input} placeholder="Name and Surname" placeholderTextColor="lightgray" />
        <TextInput style={styles.input} placeholder="Credit card number" placeholderTextColor="lightgray" />
        <TextInput style={styles.input} placeholder="MM/YY" placeholderTextColor="lightgray" />
        <TextInput style={styles.input} placeholderTextColor="lightgray" placeholder="CVV" />
      </View>
      <View style={styles.button}>
        <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Kaydet"} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default PaymentScreen;
