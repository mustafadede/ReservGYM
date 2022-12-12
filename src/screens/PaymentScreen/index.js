import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Image, KeyboardAvoidingView, Alert } from "react-native";

import database from "@react-native-firebase/database";
import { useSelector } from "react-redux";

import styles from "./style";
import { LinearButton, HeaderBar, Spacing } from "../../components/";
import colorPalette from "../../themes/colors";
import { spacing } from "../../configs"
import { SLEEP } from "../../utils/sleep";

const PaymentScreen = ({ navigation }) => {

  const { userId } = useSelector((state) => state.app);

  const [creditCardNumber, setCreditCardNumber] = useState("1548-2345-2167-7854");
  const [nameSurname, setNameSurname] = useState("Ahmet Alioğlu");
  const [cvv, setCvv] = useState("123");
  const [monthYear, setMonthYear] = useState("5/21");
  const [keys, setKeys] = useState("");
  const [user, setUser] = useState([]);


  const userInfo = {
    creditCardNumber: "1548-2345-2167-7854",
    nameSurname: "Ahmet Alioğlu",
    cvv: "123",
    monthYear: "5/21"
  }

  const validation = (
    creditCardNumber === userInfo.creditCardNumber &&
    nameSurname === userInfo.nameSurname &&
    cvv === userInfo.cvv &&
    monthYear === userInfo.monthYear
  );

  useEffect(() => {
    const readMemberPage = () => {
      if (validation) {
        let rootRef = database().ref();
        rootRef
          .child("Users")
          .orderByChild("userid")
          .equalTo(userId)
          .once("value")
          .then((snapshot) => {
            const key = Object.keys(snapshot.val())[0];
            setUser(snapshot.val()[key]);
            setKeys(key);
          })
          .then(async () => {
            await SLEEP(1500);
          });
      }
    };
    readMemberPage();
  }, [keys])

  const paymentFunc = () => {
    if (keys !== "" && user.status.adminBoolean === false && validation === true) {
      database().ref("Users/" + keys).update({
        status: {
          paymentBoolean: true,
          adminBoolean: false,
        },
        allowedProfileTime: user.allowedProfileTime + 30
      })
        .then(() => {
          Alert.alert("Ödeme işlemi", "Ödeme başari ile yapıldı. Üyeliğiniz aktifleştirilmiştir.", [, { text: "OK" }]);
          navigation.navigate("MemberProfile")
        });
    } else if (keys !== "" && user.status.adminBoolean === true && validation === true) {
      Alert.alert("Ödeme işlemi", "Üyeliğiniz askıya alınmıştır. Lütfen kurum ile irtibata geçiniz!", [, { text: "OK" }]);
      navigation.navigate("MemberProfile")
    } else if (validation === false) {
      Alert.alert("Ödeme işlemi", "Kart bilgileriniz hatalıdır. Lütfen tekrar deneyiniz!", [, { text: "OK" }]);
    };
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderBar title={"Ödeme yap"} back
        onClickBackHandler={() => navigation.goBack()}
      />
      <Image style={styles.creditCard} source={require("../../assets/creditCard.png")} />
      <Spacing spacing={spacing.xs} />
      <View style={styles.creditCardForm}>
        <Text style={{ marginBottom: -spacing.xs }}>İsim soyisim</Text>
        <TextInput style={styles.input} placeholder="Name and Surname" placeholderTextColor="lightgray"
          onChangeText={(text) => setNameSurname(text)} value={nameSurname} />
        <Spacing spacing={spacing.xxs} />
        <Text style={{ marginBottom: -spacing.xs }}>Kart numarası</Text>
        <TextInput style={styles.input} placeholder="Credit card number" placeholderTextColor="lightgray" maxLength={19}
          onChangeText={(text) => setCreditCardNumber(text)} value={creditCardNumber} />
        <Spacing spacing={spacing.xxs} />
        <Text style={{ marginBottom: -spacing.xs }}>Kart tarihi</Text>
        <TextInput style={styles.input} placeholder="MM/YY" placeholderTextColor="lightgray" maxLength={5}
          onChangeText={(text) => setMonthYear(text)} value={monthYear} />
        <Spacing spacing={spacing.xxs} />
        <Text style={{ marginBottom: -spacing.xs }}>Cvv</Text>
        <TextInput style={styles.input} placeholderTextColor="lightgray" placeholder="CVV" maxLength={3}
          onChangeText={(text) => setCvv(text)} value={cvv} />
      </View>
      <View style={styles.button}>
        <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Öde"}
          onClickHandler={paymentFunc}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default PaymentScreen;
