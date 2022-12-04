import { Text, View } from "react-native";
import React from "react";
import { HeaderBar, Member, Spacing } from "../../components";
import { styles } from "../AdminMember/style";
import { spacing } from "../../configs";

const AdminMembers = () => {
  return (
    <>
      <HeaderBar title={"Admin Members"} exit />
      <View style={styles.main}>
        <Spacing spacing={spacing.xxs} />
        <Member />
      </View>
    </>
  );
};

export default AdminMembers;
