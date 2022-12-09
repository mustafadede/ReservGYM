import { StyleSheet } from "react-native";
import { fontSize, imageSize, spacing } from "../../configs";
import colorPalette from "../../themes/colors";
import { W, H } from "../../utils/ui/dimension";

export const styles = StyleSheet.create({
  memberProfile: {
    height: H(20),
    alignItems: "center",
    justifyContent: "space-between",
  },
  memberProfileDetails: {
    width: W(90),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  memberProfileInfo: {
    alignItems: "center",
    width: W(25),
    padding: spacing.xs,
    backgroundColor: colorPalette.white,
    borderRadius: imageSize.s,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  memberInputInfo: {
    width: W(25),
    textAlign: "center",
    fontWeight: fontSize.thick,
    paddingHorizontal: spacing.s,
    paddingVertical: 5,
  },
  labelText: {
    color: colorPalette.lightRed,
    fontWeight: fontSize.thick,
  },
  memberStatus: {
    alignItems: "center",
    width: W(80),
    padding: spacing.xs,
    backgroundColor: colorPalette.white,
    borderRadius: imageSize.s,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  memberStatusTitle: {
    fontWeight: fontSize.thin,
    marginTop: spacing.xs,
  },
  memberStatusInfo: {
    fontWeight: fontSize.thick,
    color: colorPalette.lightRed,
  },
});
