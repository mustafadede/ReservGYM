import React from "react";
import { View, Text } from "react-native";
import { HeaderBar, LinearButton, Member, MemberInfo, Spacing } from "../../components";
import colorPalette from "../../themes/colors";
import { spacing } from "../../configs/";
import { styles } from "./style";

const AdminMember = ({ navigation }) => {
  return (
    <>
      <HeaderBar title={"Üye"} back
        onClickBackHandler={() => navigation.goBack()}
      />
      <View style={styles.main}>
        <Member />
        <Spacing spacing={spacing.xs} />
        <MemberInfo />
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
        <LinearButton colors={[colorPalette.darkRed, colorPalette.lightRed]} title={"Üyeliği Askıya Al"} />
        <Spacing spacing={spacing.s} />
        <LinearButton colors={[colorPalette.darkRed, colorPalette.lightRed]} title={"Üyeliği Aç"} />
      </View>
    </>
  );
};

export default AdminMember;
