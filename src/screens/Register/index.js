import React, { useState } from "react";
import { View, Text, TextInput, Image, Linking, TouchableOpacity } from "react-native";

import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import { handleRegister } from "../../firebase";

import { LinearButton, Spacing } from "../../components";
import colorPalette from "../../themes/colors";
import { w } from "../../utils/ui/dimension";
import styles from "./style";
import { spacing } from "../../configs";

function Register({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");
  const [surname, setSurname] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>Merhaba</Text>
        <Text style={styles.headText2}>Hesap Oluşturun</Text>
      </View>
      <View>
        <View style={styles.inputBox}>
          <View style={styles.inputRow}>
            <Icon name="user" size={24} color={colorPalette.lightgray} />
            <TextInput
              placeholder="Adınız"
              value={names}
              onChangeText={(text) => setNames(text)}
              placeholderTextColor={colorPalette.darkgray}
              style={styles.inputText}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputRow}>
            <Icon name="user" size={24} color={colorPalette.lightgray} />
            <TextInput
              placeholder="Soyadınız"
              value={surname}
              onChangeText={(text) => setSurname(text)}
              placeholderTextColor={colorPalette.darkgray}
              style={styles.inputText}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputRow}>
            <Icon name="envelope-o" size={24} color={colorPalette.lightgray} />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              placeholderTextColor={colorPalette.darkgray}
              style={styles.inputText}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputRow}>
            <Icon name="lock" size={30} color={colorPalette.lightgray} />
            <TextInput
              placeholder="Şifre"
              value={password}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={colorPalette.darkgray}
              style={styles.inputText}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name="eye-slash" size={24} color={colorPalette.lightgray} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkRow}>
          <CheckBox
            boxType="square"
            onCheckColor={colorPalette.darkRed}
            onTintColor={colorPalette.darkRed}
            TintColors={colorPalette.darkRed}
            lineWidth={1}
            width={1}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.kvkk}>
            Devam ederek
            <Text style={{ textDecorationLine: "underline" }}> KVKK</Text> ve Kullanım Koşullarımızı kabul etmiş olduğunuzu onaylıyorsunuz.
          </Text>
        </View>
        <Spacing spacing={spacing.s} />
        <View style={styles.inputButton}>
          <LinearButton
            colors={[colorPalette.lightRed, colorPalette.darkRed]}
            title={"Üye Ol"}
            onClickHandler={() => {
              handleRegister(email, password, names, surname, navigation);
            }}
          />
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
            <Text style={{ width: w * 0.2, textAlign: "center", marginTop: "30%" }}>Veya</Text>
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

        <View style={styles.LoginButton}>
          <Text>Hesabınız var mı ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: colorPalette.darkRed }}>
              {"   "}
              Giriş yapın
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Register;
