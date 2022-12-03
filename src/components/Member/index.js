import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

const Member = () => {
    return (
        <View style={styles.member}>
            <View>
                <Image
                    source={require("../../assets/logo.png")}
                    style={styles.memberImage}
                />
            </View>
            <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Ahmet Alioğlu</Text>
                <Text style={styles.memberDetails}>Üyelik Geçerlilik Süresi: 2 Ay</Text>
            </View>
        </View>
    );
};

export { Member };