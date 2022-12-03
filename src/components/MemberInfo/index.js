import React from 'react';
import { Text, View, TextInput } from 'react-native';
import colorPalette from "../../themes/colors"
import { styles } from './styles';

const MemberInfo = () => {
    return (
        <View style={styles.memberProfile}>
            <View style={styles.memberProfileDetails}>
                <View style={styles.memberProfileInfo}>
                    <TextInput style={styles.memberInputInfo}
                        maxLength={6}
                        placeholder="Giriniz..."
                        placeholderTextColor={colorPalette.lightRed}
                    />
                    <Text>Boy</Text>
                </View>
                <View style={styles.memberProfileInfo}>
                    <TextInput style={styles.memberInputInfo}
                        maxLength={6}
                        placeholder="Giriniz..."
                        placeholderTextColor={colorPalette.lightRed}
                    />
                    <Text>Kilo</Text>
                </View>
                <View style={styles.memberProfileInfo}>
                    <TextInput style={styles.memberInputInfo}
                        maxLength={6}
                        placeholder="Giriniz..."
                        placeholderTextColor={colorPalette.lightRed}
                    />
                    <Text>Yaş</Text>
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