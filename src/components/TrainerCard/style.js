import { StyleSheet } from "react-native";
import colorPalette from "../../themes/colors";
import { W, H } from "../../utils/ui/dimension";

const styles = StyleSheet.create({
  trainerCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    width: W(90),
    height: H(20),
  },
  trainerImage: {
    width: W(30),
    height: H(15),
    borderRadius: 250,
  },
  trainerCardTitlesWrapper: {
    marginLeft: W(10),
  },
  trainerCardTitleMain: {
    color: colorPalette.black,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  trainerCardTitleSub: {
    color: colorPalette.lightgray,
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
