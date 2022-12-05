import { View, Text } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import DatePicker from "react-native-date-picker";
import { HeaderBar, LinearButton, TrainerCard } from "../../components/";
import colorPalette from "../../themes/colors";
import styles from "./style";

const TrainerList = ({ navigation }) => {
  const [date, setDate] = useState(new Date());

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

  return (
    <>
      <HeaderBar
        title={"Hoca Listesi"} back
        onClickBackHandler={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TrainerCard title="Ahmet Hoca" subTitle="Cycling" handlePresentModalPress={handlePresentModalPress} />
        <TrainerCard title="Ayşe Hoca" subTitle="Zumba" handlePresentModalPress={handlePresentModalPress} />
        <TrainerCard title="Volkan Hoca" subTitle="Try Hard" handlePresentModalPress={handlePresentModalPress} />

        <BottomSheetModalProvider>
          <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text style={styles.contentTitle}>Tarih Seç</Text>
              <DatePicker date={date} onDateChange={setDate} textColor={"black"} style={styles.contentDate} />
              <LinearButton colors={[colorPalette.lightRed, colorPalette.darkRed]} title={"Randevu al"}
                onClickHandler={() => navigation.navigate("Reservation")}
              />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </>
  );
};

export default TrainerList;
