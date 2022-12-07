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

const TrainerList = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [reservation, setReservation] = useState({ trainer: "", dateTime: "" });

  const reservationPostFunc = () => {
    console.log("çalışıyor");
    addReservation(reservation.trainer, date.toLocaleString().slice(0, -3), "userName");
    // setReservation({ trainer: reservation.trainer, dateTime: date.toLocaleString() });
    Alert.alert("Rezervasyon Başarıyla Oluşturuldu", `${date.toLocaleString().slice(0, -3)} tarihine rezervasyonunuz oluşturulmuştur`, [
      { text: "OK", onPress: () => navigation.navigate("Reservation") },
    ]);
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
    console.log("reservation", reservation);
  }, [reservation]);
  return (
    <>
      <HeaderBar title={"Hoca Listesi"} back onClickBackHandler={() => navigation.goBack()} />
      <View style={styles.container}>
        <TrainerCard
          title="Ahmet Hoca"
          subTitle="Cycling"
          handlePresentModalPress={handlePresentModalPress}
          setReservation={() => {
            setReservation({ trainer: "Ahmet Hoca", dateTime: date.toLocaleString() });
          }}
        />
        <TrainerCard
          title="Ayşe Hoca"
          subTitle="Zumba"
          handlePresentModalPress={handlePresentModalPress}
          setReservation={() => {
            setReservation({ trainer: "Ayşe Hoca" });
          }}
        />
        <TrainerCard
          title="Volkan Hoca"
          subTitle="Try Hard"
          handlePresentModalPress={handlePresentModalPress}
          setReservation={() => {
            setReservation({ trainer: "Volkan Hoca" });
          }}
        />

        <BottomSheetModalProvider>
          <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text style={styles.contentTitle}>Tarih Seç</Text>
              <DatePicker date={date} onDateChange={setDate} textColor={"black"} style={styles.contentDate} />
              <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Randevu al"} onClickHandler={reservationPostFunc} />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </>
  );
};

export default TrainerList;
