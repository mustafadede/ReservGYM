import { View, Text, Alert } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import DatePicker from "react-native-date-picker";
import { HeaderBar, LinearButton, TrainerCard } from "../../components/";
import colorPalette from "../../themes/colors";
import styles from "./style";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import { addReservation } from "../../firebase";
import database from "@react-native-firebase/database";

const TrainerList = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [reservation, setReservation] = useState({ trainer: "", dateTime: "" });
  const [done, setDone] = useState(false);

  const reservationAddCheck = () => {
    setDone(true);
    if (done) {
      let rootRef = database().ref();
      rootRef
        .child("Reservations")
        .orderByChild("dateTime")
        .equalTo(date.toLocaleString().slice(0, -3))
        .once("value")
        .then((snapshot) => {
          if (snapshot.val()) {
            Alert.alert("Uyarı", "Başka bir tarih seç", [{ text: "OK", onPress: () => navigation.navigate("Reservation") }]);
          } else {
            addReservation(reservation.trainer, date.toLocaleString().slice(0, -3), "userName");
            // setReservation({ trainer: reservation.trainer, dateTime: date.toLocaleString() });
            Alert.alert("Rezervasyon Başarıyla Oluşturuldu", `${date.toLocaleString().slice(0, -3)} tarihine rezervasyonunuz oluşturulmuştur`, [
              { text: "OK", onPress: () => navigation.navigate("Reservation") },
            ]);
          }
          setDone(false);
        });
    }
  };

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  useEffect(() => {
    reservationAddCheck();
  }, []);
  return (
    <>
      <HeaderBar title={"Hoca Listesi"} back onClickBackHandler={() => navigation.goBack()} />
      <View style={styles.container}>
        <TrainerCard
          title="Ahmet Hoca"
          subTitle="Cycling"
          handlePresentModalPress={handlePresentModalPress}
          setReservation={() => {
            setReservation({ trainer: "Ahmet Hoca", dateTime: date.toLocaleString().slice(0, -3) });
          }}
        />
        <TrainerCard
          title="Ayşe Hoca"
          subTitle="Zumba"
          handlePresentModalPress={handlePresentModalPress}
          setReservation={() => {
            setReservation({ trainer: "Ayşe Hoca", dateTime: date.toLocaleString().slice(0, -3) });
          }}
        />
        <TrainerCard
          title="Volkan Hoca"
          subTitle="Try Hard"
          handlePresentModalPress={handlePresentModalPress}
          setReservation={() => {
            setReservation({ trainer: "Volkan Hoca", dateTime: date.toLocaleString().slice(0, -3) });
          }}
        />

        <BottomSheetModalProvider>
          <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text style={styles.contentTitle}>Tarih Seç</Text>
              <DatePicker
                date={date}
                onDateChange={setDate}
                minuteInterval={30}
                locale="tr"
                is24hourSource="locale"
                textColor={"black"}
                style={styles.contentDate}
              />
              <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Randevu al"} onClickHandler={reservationAddCheck} />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </>
  );
};

export default TrainerList;
