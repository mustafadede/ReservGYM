import { View, Text, TextInput, Image, Linking, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearButton } from "../../components/";
import colorPalette from "../../themes/colors";
import { w, h } from "../../utils/ui/dimension";
import styles from "./style";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>Merhaba</Text>
        <Text style={styles.headText2}>Hoşgeldiniz!</Text>
      </View>
      <View>
        <View style={styles.inputBox}></View>
        <View style={styles.inputBox}>
          <View style={styles.inputRow}>
            <Icon name="envelope-o" size={24} color={colorPalette.lightgray} />
            <TextInput placeholder="Email" style={styles.inputText} />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputRow}>
            <Icon name="lock" size={30} color={colorPalette.lightgray} />
            <TextInput secureTextEntry placeholder="Şifre" style={styles.inputText} />
            <Icon name="eye-slash" size={24} color={colorPalette.lightgray} />
          </View>
        </View>
        <View style={styles.checkRow}>
          <View style={{ marginRight: w * 0.5 }}></View>
          <Text
            style={{ textDecorationLine: "underline" }}
            onPress={() => {
              Linking.openURL("https://support.google.com/mail/answer/41078?hl=tr&co=GENIE.Platform%3DDesktop");
            }}
          >
            Şifrenizi unuttunuz mu?
          </Text>
        </View>
        <View style={styles.inputButton}>
          <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Giriş yap"} onClickHandler={() => navigation.navigate("WelcomePage")} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colorPalette.lightgray,
              marginLeft: w * 0.1,
              marginTop: "6%",
            }}
          />
          <View>
            <Text style={{ width: w * 0.2, textAlign: "center", marginTop: "20%" }}>Veya</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colorPalette.lightgray,
              marginRight: w * 0.1,
              marginTop: "6%",
            }}
          />
        </View>
        <View style={styles.googleContainer}>
          <View style={styles.googleContent}>
            <TouchableOpacity onPress={() => navigation.navigate("AdminMembers")}>
              <Image style={styles.google} source={require("../../assets/google.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.registerButton}>
          <Text>Bir hesabınız yok mu ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: colorPalette.darkRed }}>
              {"   "}
              Kayıt olun
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
