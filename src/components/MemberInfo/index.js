import React from "react";
import { Text, View, TextInput } from "react-native";
import colorPalette from "../../themes/colors";
import { styles } from "./styles";

const MemberInfo = () => {
  return (
    <View style={styles.memberProfile}>
      <View style={styles.memberProfileDetails}>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Boy</Text>
          <TextInput style={styles.memberInputInfo} maxLength={6} placeholder="Giriniz..." placeholderTextColor={colorPalette.lightgray} />
        </View>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Kilo</Text>
          <TextInput style={styles.memberInputInfo} maxLength={6} placeholder="Giriniz..." placeholderTextColor={colorPalette.lightgray} />
        </View>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Yaş</Text>
          <TextInput style={styles.memberInputInfo} maxLength={6} placeholder="Giriniz..." placeholderTextColor={colorPalette.lightgray} />
        </View>
      </View>
      <View style={styles.memberStatus}>
        <Text style={styles.memberStatusInfo}>Aktif</Text>
        <Text style={styles.memberStatusTitle}>Üyelik Geçerlilik Durumu</Text>
      </View>
    </View>
  );
};

export { MemberInfo };
