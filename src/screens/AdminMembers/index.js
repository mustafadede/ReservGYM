import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { HeaderBar, Member, Spacing } from "../../components";
import { styles } from "../AdminMember/style";
import { spacing } from "../../configs";

const AdminMembers = ({ navigation }) => {
  return (
    <>
      <HeaderBar title={"Üyeler"}
        exit
        onClickHandler={() => navigation.navigate("Login")}
      />
      <View style={styles.main}>
        <Spacing spacing={spacing.xxs} />
        <TouchableOpacity onPress={() => navigation.navigate("AdminMember")}>
          <Member />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AdminMembers;
