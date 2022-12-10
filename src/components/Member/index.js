import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

const Member = ({ adminAllowedProfilTimes, memberName, adminMemberNames,
    memberAllowedTime }) => {
    
    return (
        <View style={styles.member}>
            <View>
                <Image
                    source={require("../../assets/logo.png")}
                    style={styles.memberImage}
                />
            </View>
            <View style={styles.memberInfo}>
                <Text style={styles.memberName}>
                    {adminMemberNames === undefined ? memberName : adminMemberNames}
                </Text>
                <Text style={styles.memberDetails}>
                    Üyelik Geçerlilik Süresi: {
                        adminAllowedProfilTimes === undefined ?
                            memberAllowedTime : adminAllowedProfilTimes
                    } Ay
                </Text>
            </View>
        </View>
    );
};

export { Member };