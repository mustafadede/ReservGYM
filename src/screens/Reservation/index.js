import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import styles from "./style";
import { getPosts } from "../../redux/exampleSlicer/exampleSlicer";
import { useSelector, useDispatch } from "react-redux";
import { addReservation, readReservation } from "../../firebase";
import { HeaderBar } from "../../components";
import Icon from "react-native-vector-icons/AntDesign";
import colorPalette from "../../themes/colors";
import database from "@react-native-firebase/database";

const Reservation = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const readReservation = () => {
      database()
        .ref("Reservations")
        .on("value", (snapshot) => {
          setData(snapshot.val());
        });
    };
    readReservation();
  }, []);

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
