import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

import database from "@react-native-firebase/database";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";

import styles from "./style";
import { HeaderBar } from "../../components";
import colorPalette from "../../themes/colors";

const Reservation = ({ navigation }) => {
  const [data, setData] = useState([]);
  const { userId } = useSelector((state) => state.app);
  const isFocused = useIsFocused();

  useEffect(() => {
    const readReservation = () => {
      database()
        .ref("Reservations")
        .orderByChild("memberName")
        .equalTo(userId)
        .once("value", (snapshot) => {
          setData(snapshot.val());
        });
    };
    if (isFocused) {
      readReservation();
    }
  }, [isFocused, data]);



  deleteReservationFunc = (item) => {
    database()
    .ref("/Reservations/" + item).remove();
  }  

  return (
    <View style={styles.container}>
      <HeaderBar title={"Rezervasyonlarım"} back onClickBackHandler={() => navigation.goBack()} />
      {data && (
        <FlatList
          data={Object.keys(data)}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <View style={styles.resrow}>
              <Image style={styles.images} source={{ uri: "https://picsum.photos/50" }} />
              <View style={styles.namedate}>
                <Text style={styles.trainername}>{data[item].trainerName}</Text>
                <Text style={styles.dateTime}>{data[item].dateTime}</Text>
              </View>
              <TouchableOpacity onPress={() => deleteReservationFunc(item)} style={{ marginLeft: "auto" }}>
                <Icon name={"delete"} color={colorPalette.lightRed} size={30} />
              </TouchableOpacity>
            </View>
          )}
          nestedScrollEnabled
        />
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TrainerList");
          // addReservation("Sena Hoca", "2021-05-05 12:00", "Aleyna");
        }}
        style={styles.addButton}
      >
        <Icon name={"pluscircle"} color={colorPalette.lightRed} size={60} />
      </TouchableOpacity>
    </View>
  );
};

export default Reservation;
