import { StyleSheet } from "react-native";
import colorPalette from "../../themes/colors";
import { w, h, W, H } from "../../utils/ui/dimension";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white,
    justifyContent: "center",
    paddingHorizontal: W(5),
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
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    alignItems: "center",
    marginHorizontal: H(1),
    marginVertical: H(1),
  },
  inputRow: {
    flexDirection: "row",
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
    marginStart: W(3),
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
  kvkk: {
    marginHorizontal: "4%",
    marginTop: "1%",
    marginBottom: "1%",
    color: colorPalette.lightgray,
  },
  LoginButton: {
    flexDirection: "row",
    marginTop: "4%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
