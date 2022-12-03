import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Member } from '../../components/member'
import { MemberInfo } from '../../components/memberInfo'
import LinearButton from "../../components/linearButton";
import colorPalette from '../../themes/colors';
import { styles } from './style'
import { spacing } from "../../configs"
import { Spacing } from '../../components/spacing';

const AdminMember = () => {
  return (
    <View style={styles.main}>
      <Member />
      <Spacing spacing={spacing.xs} />
      <MemberInfo />
      <Spacing spacing={spacing.s} />
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
      <Spacing spacing={spacing.s} />
      <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Üyeliği askiya al"} />
      <Spacing spacing={spacing.s} />
      <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Üyeliği aç"} />
    </View>
  )
}

export { AdminMember }