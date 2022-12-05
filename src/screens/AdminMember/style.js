import { StyleSheet } from "react-native";
import { spacing, imageSize, fontSize } from "../../configs";
import { W, H } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: spacing.m,
  },
  paymentList: {
    alignItems: "center",
    marginTop: spacing.m,
    width: W(80),
    height: H(25),
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
  paymentListTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: W(80),
    marginTop: spacing.xs,
  },
  paymentTitle: {
    fontWeight: fontSize.bold,
  },
  paymentTitleContent: {
    fontWeight: fontSize.thick,
  },
  paymentDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: W(80),
    marginTop: spacing.xxs,
  },
  paymentListContent: {
    fontWeight: fontSize.thin,
  },
});
