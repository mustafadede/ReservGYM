import { StyleSheet } from "react-native";
import colorPalette from "../../themes/colors";
import { W, H } from "../../utils/ui/dimension";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  contentTitle: {
    marginVertical: 10,
    color: colorPalette.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  contentDate: {
    marginBottom: 10,
  },
});

export default styles;
