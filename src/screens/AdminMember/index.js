import React from 'react';
import { View, Text } from 'react-native';
import { Member, MemberInfo } from '../../components';
import { styles } from './style';

const AdminMember = () => {
  return (
    <View style={styles.main}>
      <Member />
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
    </View>
  )
}

export { AdminMember }