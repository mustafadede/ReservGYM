import { StyleSheet } from "react-native";
import { imageSize, fontSize, spacing } from "../../configs";
import { H } from "../../utils/ui/dimension";

export const styles = StyleSheet.create({
  member: {
    flexDirection: "row",
    height: H(10),
    alignItems: "center",
    padding: spacing.xs,
    marginRight: "auto",
  },
  memberImage: {
    width: imageSize.l,
    height: imageSize.l,
    borderRadius: imageSize.m,
  },
  memberInfo: {
    marginLeft: spacing.s,
    height: H(6),
    justifyContent: "space-evenly",
  },
  memberName: {
    fontWeight: fontSize.bold,
    fontSize: fontSize.m,
  },
  memberDetails: {
    fontSize: fontSize.s,
    fontWeight: fontSize.thin,
  },
});
