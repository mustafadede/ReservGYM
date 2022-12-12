import React from "react";
import { View, StatusBar } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./navigation";

const Root = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </GestureHandlerRootView>
    </>
  );
};

export default Root;
