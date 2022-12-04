import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";
const styles = StyleSheet.create({
  row: {
    paddingTop: W(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
