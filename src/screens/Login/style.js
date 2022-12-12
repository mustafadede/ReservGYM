import { StyleSheet } from "react-native";
import colorPalette from "../../themes/colors";
import { w, h, W, H } from "../../utils/ui/dimension";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white,
    justifyContent: "center",
  },

  header: {
    marginTop: "4%",
    alignItems: "center",
  },
  googleContainer: {
    marginTop: H(2),
    alignItems: "center",
    justifyContent: "center",
  },
  googleContent: {
    borderColor: colorPalette.lightgray,
    borderWidth: 1,
    borderRadius: 15,
  },
  google: {
    width: W(15),
    alignSelf: "center",
    resizeMode: "center",
  },
  checkRow: {
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: "2%",
    marginHorizontal: H(1),
    marginBottom: H(10),
  },
  inputRow: {
    flexDirection: "row",
    width: w * 0.9,
    height: h * 0.07,
    alignSelf: "center",
    backgroundColor: "#E7E7E7",
    marginVertical: "3%",
    paddingHorizontal: "4%",
    paddingVertical: "2%",
    borderRadius: 20,
    alignItems: "center",
  },
  inputText: {
    flex: 2,
    fontWeight: "100",
    marginHorizontal: W(2),
  },

  inputBox: {
    width: "100%",
    alignItems: "center",
  },
  inputButton: {
    width: "100%",
    alignItems: "center",
  },

  headText: {
    fontSize: 20,
    color: colorPalette.black,
    fontWeight: "300",
    letterSpacing: 2,
  },
  headText2: {
    fontSize: 26,
    color: colorPalette.black,
    fontWeight: "800",
    letterSpacing: 0.6,
    marginBottom: "4%",
  },
  registerButton: {
    flexDirection: "row",
    marginTop: "4%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
