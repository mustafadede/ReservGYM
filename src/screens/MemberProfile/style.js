import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimension";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: W(6),
  },
  member: {
    marginTop: H(-10),
  },
  buttonLinearContainer: {
    marginTop: H(10),
  },
  buttonLinear: {
    marginTop: H(2),
  },
  buttonCircular: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: H(50),
    padding: 15,
    width: 80,
    height: 80,
    bottom: H(-5),
  },
  disabledButonCircular:{
    alignItems: "center",
    justifyContent: "center",
    borderRadius: H(50),
    padding: 15,
    width: 80,
    height: 80,
    bottom: H(-5),
    opacity:0.5,

  }
});

export default styles;
