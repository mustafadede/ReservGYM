import { StyleSheet } from "react-native";
import { colorPalette } from "../../themes/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white,
  },

  header: {
    marginTop: "4%",
    alignItems: "center",
  },

  checkRow: {
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: "2%",
    height: h * 0.1,
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
  },
  inputText: {
    flex: 2,
    fontWeight: "100",
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
});

export default styles;