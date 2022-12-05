import React from "react";
import { View, StatusBar } from "react-native";
import Navigation from "./navigation";

const Root = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </>
  );
};

export default Root;
