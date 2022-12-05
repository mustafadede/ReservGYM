import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";
import { getStatusBarHeight } from "../../utils/ui/getStatusBarHeight";

const styles = StyleSheet.create({
  row: {
    paddingTop: getStatusBarHeight(false),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: W(5),
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default styles;
