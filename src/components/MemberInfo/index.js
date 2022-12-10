import React ,{useState, useEffect} from "react";
import { Text, View, TextInput } from "react-native";
import database from "@react-native-firebase/database";

import { styles } from "./styles";
import colorPalette from "../../themes/colors";


const MemberInfo = ({ status ,userid}) => {
const [ length, setLength] = useState("");
const [ weigth, setWeigth] = useState("");
const [ age, setAge] = useState("");
const [keys, setKeys] = useState("");
const [user,setUser] = useState();
const [statusData,setStatusData]= useState(false);


useEffect(()=>{
  let rootRef = database().ref();
  rootRef
    .child("Users")
    .orderByChild("userid")
    .equalTo(userid)
    .once("value")
    .then(  (snapshot) =>{
      const key = Object.keys(snapshot.val())[0];
       setKeys(key);
       setUser(snapshot.val()[key]);
       setStatusData(true);
      console.log(key);
      console.log(user);
    })
    
   
    
},[])

const addUserInformation = (weight) => {
       database().ref("Users/" + keys.toString() ).update({
        weight: weight,
        
    })
      .then(() => {
        console.log("User ınformation added");
      });
}

const ageUserInformation = ( age) => {
  database().ref("Users/" + keys.toString() ).update({
  
   age: age,
})
 .then(() => {
   console.log("User ınformation added");
 });
}

const lengthUserInformation = ( length) => {
  database().ref("Users/" + keys.toString() ).update({
  
   length :length
})
 .then(() => {
   console.log("User ınformation added");
 });
}


  return (
    <View style={styles.memberProfile}>
      <View style={styles.memberProfileDetails}>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Boy</Text>
          <TextInput style={styles.memberInputInfo} maxLength={6}  placeholderTextColor={colorPalette.lightgray} 
          onChangeText={(text) => {setLength(text);
          lengthUserInformation(length)}} 
          value={statusData && user.length}/>
        </View>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Kilo</Text>
          <TextInput style={styles.memberInputInfo} 
          maxLength={6}  
          placeholderTextColor={colorPalette.lightgray}
          onChangeText={(text) =>{ setWeigth(text);
            addUserInformation(weigth)
          }} value={statusData && user.weight} />
        </View>
        <View style={styles.memberProfileInfo}>
          <Text style={styles.labelText}>Yaş</Text>
          <TextInput style={styles.memberInputInfo} maxLength={6}  placeholderTextColor={colorPalette.lightgray}
          onChangeText={(text) => {setAge(text);
            ageUserInformation(age)}} value={statusData && user.age}  />
        </View>
      </View>
      <View style={styles.memberStatus}>
        <Text style={styles.memberStatusInfo}>{status === true ? "Aktif" : "Pasif"}</Text>
        <Text style={styles.memberStatusTitle}>Üyelik Geçerlilik Durumu</Text>
      </View>
    </View>
  );
};

export { MemberInfo };
