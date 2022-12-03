import { StyleSheet } from "react-native";
import { fontSize, imageSize, spacing } from "../../configs";
import { W } from "../../utils/ui/dimension";
import colorPalette from "../../themes/colors";

export const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: imageSize.m,
        padding: spacing.s,
        width: W(80),
        height: W(15),
    },
    buttonText: {
        color: colorPalette.white, 
        fontWeight: fontSize.bold,
        fontSize: fontSize.l
    }
});

