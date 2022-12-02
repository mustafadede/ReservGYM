import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearButton from "./components/linearButton/linearButton";
import colorPalette from "./themes/colors";

function HomeScreen() {
  const data = useSelector((state) => state.app.appName);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{data}</Text>
      <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"BAAAS"} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => <Icon name="cog" size={30} />,
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Root;
