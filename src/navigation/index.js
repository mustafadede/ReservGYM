import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import { AdminMember, AdminMembers, Login, MemberProfile, PaymentScreen, Register, Reservation, TrainerList, WelcomePage, BarcodeScreenExample } from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Reservation" component={Reservation} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="AdminMember" component={AdminMember} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="AdminMembers" component={AdminMembers} />
                <Stack.Screen name="MemberProfile" component={MemberProfile} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen name="TrainerList" component={TrainerList} />
                <Stack.Screen name="WelcomePage" component={WelcomePage} />
                <Stack.Screen name="QrCodeScreen" component={BarcodeScreenExample} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
