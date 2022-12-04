import { W, H } from "../../utils/ui/dimension";
import { StyleSheet } from "react-native";
import { fontSize } from "../../configs";
import colorPalette from "../../themes/colors";
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    padding: 15,
    width: W(80),
    height: H(8),
    fontWeight: fontSize.bold,
  },
  text: {
    color: colorPalette.white,
    fontWeight: fontSize.bold,
    fontSize: fontSize.m,
  },
});

export default styles;
