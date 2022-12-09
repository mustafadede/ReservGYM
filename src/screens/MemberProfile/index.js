import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import database from "@react-native-firebase/database";

import { spacing } from "../../configs";
import { Member, MemberInfo, Spacing, HeaderBar, LinearButton } from "../../components";
import styles from "./style";
import colorPalette from "../../themes/colors";

const MemberProfile = ({ navigation }) => {

  const { userId } = useSelector((state) => state.app);

  const [user, setUser] = useState({});

  useEffect(() => {
    let rootRef = database().ref();
    rootRef
      .child("Users")
      .orderByChild("userid")
      .equalTo(userId)
      .once("value")
      .then((snapshot) => {
        const key = Object.keys(snapshot.val())[0];
        setUser(snapshot.val()[key]);
      });
  }, []);

  return (
    <>
      <HeaderBar title={"Member Profile"} exit onClickHandler={() => navigation.navigate("Login")} onClickBackHandler={() => navigation.goBack()} />
      <View style={styles.main}>
        <Spacing spacing={spacing.xs} />
        <Member style={styles.member}
          memberName={user.name + " " + user.surname}
          memberAllowedTime={user.allowedProfileTime}
        />
        <Spacing spacing={spacing.s} />
        <MemberInfo status={user.status} />
        <View style={styles.buttonLinearContainer}>
          <View style={styles.buttonLinear}>
            <LinearButton
              colors={[colorPalette.lightRed, colorPalette.darkRed]}
              title={"Rezervasyonlarım"}
              onClickHandler={() => navigation.navigate("Reservation")}
            />
          </View>
          <View style={styles.buttonLinear}>
            <LinearButton
              colors={[colorPalette.lightRed, colorPalette.darkRed]}
              title={"Ödeme Yap"}
              onClickHandler={() => navigation.navigate("PaymentScreen")}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("QrCodeScreen")}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colorPalette.lightRed, colorPalette.darkRed]} style={styles.buttonCircular}>
            <Text style={{ color: colorPalette.white, fontWeight: "bold" }}>
              <Icon name="camera" size={30} />
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MemberProfile;
