import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";

import { getUserID } from "../../redux/exampleSlicer/exampleSlicer";
import database from "@react-native-firebase/database";
import { useDispatch } from "react-redux";

import { HeaderBar, Member, Spacing } from "../../components";
import { styles } from "../AdminMember/style";
import { spacing } from "../../configs";


const AdminMembers = ({ navigation, route }) => {

  const [userList, setUserList] = useState([]);

  const { userid } = route.params;
  const dispatch = useDispatch();

  dispatch(getUserID(userid));



  useEffect(() => {
    let rootRef = database().ref();
    rootRef
      .child("Users")
      .once("value")
      .then((snapshot) => {
        setUserList(snapshot.val());
      })
  }, []);

  return (
    <>
      <HeaderBar title={"Üyeler"}
        exit
        onClickHandler={() => navigation.navigate("Login")}
      />
      <View style={styles.main}>
        <Spacing spacing={spacing.xxs} />
        <FlatList
          data={Object.keys(userList)}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("AdminMember",{memberId:userList[item].userid})}>
              <Member
                
                adminMemberNames={userList[item].name + " " + userList[item].surname}
                adminAllowedProfilTimes={userList[item].allowedProfileTime}
              />
            </TouchableOpacity>
            
          )}
          nestedScrollEnabled
        />
      </View>
    </>
  );
};

export default AdminMembers;
