import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import database from "@react-native-firebase/database";

import { styles } from "./styles";
import colorPalette from "../../themes/colors";
import { Spacing } from "../Spacing";
import { spacing } from "../../configs"

const MemberInfo = ({ status, userid }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [keys, setKeys] = useState("");
  const [statusData, setStatusData] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);


  useEffect(() => {
    let rootRef = database().ref();
    rootRef
      .child("Users")
      .orderByChild("userid")
      .equalTo(userid)
      .once("value")
      .then((snapshot) => {
        const key = Object.keys(snapshot.val())[0];
        setKeys(key);
        setStatusData(true);
        setAge(snapshot.val()[key].age);
        setHeight(snapshot.val()[key].height);
        setWeight(snapshot.val()[key].weight);
      })
  }, []);

  const refreshMemberInfo = (age, weight, height) => {
    database().ref("Users/" + keys.toString()).update({
      age: age,
      height: height,
      weight: weight
    })
      .then(() => {
        setInputDisabled(inputDisabled === true ? false : true);
        Alert.alert("Güncelleme", "Bilgileriniz başarı ile güncellendi.",
          [, { text: "OK" }]);
        console.log("User ınformation added");
      });
  }

  return (
    <View style={styles.memberProfile}>
      <View style={styles.memberStatus}>
        <Text style={styles.memberStatusInfo}>{status === true ? "Aktif" : "Pasif"}</Text>
        <Text style={styles.memberStatusTitle}>Üyelik Geçerlilik Durumu</Text>
      </View>
      <Spacing spacing={spacing.xs} />
      <View style={styles.memberProfileDetails}>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Boy</Text>
          <TextInput style={styles.memberInputInfo} maxLength={6} placeholderTextColor={colorPalette.lightgray}
          placeholder="Giriniz.."
            onChangeText={(text) => {
              setHeight(text);
            }}
            value={statusData === true ? height : "..."} />
        </View>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Kilo</Text>
          <TextInput style={styles.memberInputInfo}
            maxLength={6}
            placeholder="Giriniz.."
            placeholderTextColor={colorPalette.lightgray}
            onChangeText={(text) => {
              setWeight(text);
            }} value={statusData === true ? weight : "..."} />
        </View>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Yaş</Text>
          <TextInput style={styles.memberInputInfo}
          placeholder="Giriniz.." 
          maxLength={6} placeholderTextColor={colorPalette.lightgray}
            onChangeText={(text) => {
              setAge(text);
            }} value={statusData === true ? age : "..."} />
        </View>
      </View>
      <Spacing spacing={spacing.xs} />
      <TouchableOpacity style={styles.memberStatus} onPress={() =>
        refreshMemberInfo(age, weight, height)}>
        <Text style={styles.memberStatusInfo}>Güncelle</Text>
      </TouchableOpacity>
    </View>
  );
};

export { MemberInfo };
