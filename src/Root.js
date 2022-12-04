import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearButton } from "./components/";
import colorPalette from "./themes/colors";
import { AdminMember, AdminMembers, Login, MemberProfile, PaymentScreen, Register, Reservation, TrainerList, WelcomePage } from "./screens";

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={AdminMembers}
          options={{
            tabBarLabel: "Admin",
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Welcome Page"
          component={WelcomePage}
          options={{
            tabBarLabel: "Welcome Page",
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Member Profile"
          component={MemberProfile}
          options={{
            tabBarLabel: "Member Profile",
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Reservation"
          component={Reservation}
          options={{
            tabBarLabel: "Reservation",
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="TrainerList"
          component={TrainerList}
          options={{
            tabBarLabel: "TrainerList",
            tabBarIcon: () => <Icon name="cog" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Root;
