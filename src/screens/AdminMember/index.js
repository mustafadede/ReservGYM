import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

import database from "@react-native-firebase/database";

import { HeaderBar, LinearButton, Member, Spacing } from "../../components";
import colorPalette from "../../themes/colors";
import { spacing } from "../../configs/";
import { styles } from "./style";
import { SLEEP } from "../../utils/sleep";

const AdminMember = ({ navigation, route }) => {
  const { memberId } = route.params;
  const [user, setUser] = useState([]);
  const [currentStatus, setCurrentStatus] = useState();
  const [keys, setKeys] = useState("");

  useEffect(() => {
    let rootRef = database().ref();
    rootRef
      .child("Users")
      .orderByChild("userid")
      .equalTo(memberId)
      .once("value")
      .then((snapshot) => {
        const key = Object.keys(snapshot.val())[0];
        setUser(snapshot.val()[key]);
        setCurrentStatus(snapshot.val()[key].status.paymentBoolean)
        setKeys(key);
      })
      .then(async () => {
        await SLEEP(1500);
      });
  }, []);

  const changeStatus = (status) => {
    console.log(currentStatus, status);
    database().ref("Users/" + keys.toString()).update({
      status: {
        paymentBoolean: currentStatus,
        adminBoolean: status,
      },
    })
      .then(() => {
        console.log("User ınformation added");
        Alert.alert("Üyelik işlemi", `Üyelik ${status === false ? "pasif" : "aktif"} hale getirildi`, [, { text: "OK" }]);
      });
  }

  return (
    <>
      <HeaderBar title={"Üye"} back
        onClickBackHandler={() => navigation.goBack()}
      />
      <View style={styles.main}>
        <Spacing spacing={spacing.xxs} />
        <Member memberName={user.name + " " + user.surname} 
        memberAllowedTime={user.allowedProfileTime} />
        <Spacing spacing={spacing.xs} />
        <View style={styles.paymentList}>
          <Text style={styles.paymentTitle}>Ödemeler</Text>
          <View style={styles.paymentListTitle}>
            <Text style={styles.paymentTitleContent}>Tarih</Text>
            <Text style={styles.paymentTitleContent}>Kredi Karti</Text>
            <Text style={styles.paymentTitleContent}>Tutar</Text>
          </View>
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentListContent}>03.05.2022</Text>
            <Text style={styles.paymentListContent}>******4345</Text>
            <Text style={styles.paymentListContent}>67.90₺</Text>
          </View>
        </View>
        <Spacing spacing={spacing.xs} />
        <LinearButton colors={[colorPalette.darkRed, colorPalette.lightRed]} title={"Üyeliği Aç"} onClickHandler={() => {
          changeStatus(true)
        }} />
        <Spacing spacing={spacing.s} />
        <LinearButton colors={[colorPalette.darkRed, colorPalette.lightRed]} title={"Üyeliği Askıya Al"} onClickHandler={() => {
          changeStatus(false)
        }} />
      </View>
    </>
  );
};

export default AdminMember;
