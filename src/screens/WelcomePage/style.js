import { StyleSheet } from "react-native";
import colorPalette from "../../themes/colors";
import { W, H } from "../../utils/ui/dimension";
import { fontSize } from "../../configs";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    marginTop: H(-10),
    width: W(70),
    height: H(70),
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: H(-10),
  },
  header: {
    fontSize: fontSize.l,
    fontWeight: fontSize.thick,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: fontSize.thin,
  },
  button: {
    marginTop: H(15),
  },
});

export default styles;
