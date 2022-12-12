import React, { useEffect , useState} from "react";
import { View, Text, Image } from "react-native";

import { useDispatch } from "react-redux";
import { getUserID } from "../../redux/exampleSlicer/exampleSlicer";
import database from "@react-native-firebase/database";

import styles from "./style";
import { LinearButton } from "../../components/";
import colorPalette from "../../themes/colors";

const WelcomePage = ({ navigation, route }) => {

  const { userid } = route.params;
  const dispatch = useDispatch();
  const [welcomeName,setWelcomeName] = useState({name:"...",surname:"..."});

  dispatch(getUserID(userid));

  useEffect(()=>{
    let rootRef = database().ref();
    rootRef
      .child("Users")
      .orderByChild("userid")
      .equalTo(userid)
      .once("value")
      .then((snapshot) =>{
        const key = Object.keys(snapshot.val())[0];
        setWelcomeName(snapshot.val()[key]);
      })
  },[])
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/welcome.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Hoşgeldin, {welcomeName.name + " " + welcomeName.surname }</Text>
        <Text style={styles.text}>Artık hazırsın, hadi hedeflerine {"\n"} birlikte ulaşalım!</Text>
      </View>
      <View style={styles.button}>
        <LinearButton
          colors={[colorPalette.lightRed, colorPalette.darkRed]}
          title={"Profiline Git"}
          onClickHandler={() => {
            dispatch(getUserID(userid));
            navigation.navigate("MemberProfile");
          }}
        />
      </View>
    </View>
  );
};

export default WelcomePage;
