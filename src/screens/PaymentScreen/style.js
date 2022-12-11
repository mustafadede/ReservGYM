import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  creditCard: {
    width: W(100),
    height: H(25),
    marginTop: H(2),
    resizeMode: "contain",
  },
  creditCardForm: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    marginVertical: W(5),
  },
  input: {
    width: W(80),
    borderColor: "lightgray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colorPalette.white,
    color: colorPalette.black,
  },
});
export default styles;
