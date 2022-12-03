import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    paddingTop: W(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  resrow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: W(10),
    paddingHorizontal: W(8),
  },
  trainername: {
    fontSize: 14,
    fontWeight: "400",
    color: colorPalette.black,
    paddingBottom: W(3),
  },
  dateTime: {
    fontSize: 12,
    fontweight: "100",
    color: colorPalette.lightgray,
  },
  namedate: {
    paddingStart: W(3),
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
  images: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  addButton: {
    position: "absolute",
    bottom: W(5),
    right: W(5),
  },
});
export default styles;
