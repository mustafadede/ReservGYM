import React from "react";
import { Alert } from "react-native";

import { CameraScreen } from "react-native-camera-kit";

const BarcodeScreenExample = ({navigation}) => {

    return (
    <CameraScreen
      scanBarcode={true}
      onReadCode={(event) => {
        Alert.alert("Giriş başarılı","İçeri girebilirsiniz")
        navigation.goBack()
    }} 
      showFrame={true} 
      laserColor="red" 
      frameColor="white"
    />)
}

export default BarcodeScreenExample