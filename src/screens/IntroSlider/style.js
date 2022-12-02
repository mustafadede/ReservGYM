import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  lottieWrapper: {
    overflow: "hidden",
    borderRadius: 250,
  },
  lottieView: {
    width: W(100),
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: colorPalette.lightRed,
    fontWeight: "400",
    fontSize: 18,
    textAlign: "center",
    padding: H(5),
  },
  buttonCircle: {
    bottom: W(5),
  },
});
export default styles;
