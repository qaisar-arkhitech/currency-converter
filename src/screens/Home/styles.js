import {Dimensions, StyleSheet} from "react-native"

const screen = Dimensions.get("window")

// Home: Styling here
const styles = (styleableTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: styleableTheme[500],
    },
    header: {
      alignItems: "flex-end",
      marginHorizontal: 20,
    },
    content: {
      paddingTop: screen.height * 0.1,
    },
    logoContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    logoBackground: {
      width: screen.width / 0.45,
      height: screen.width * 0.45,
    },
    logo: {
      position: "absolute",
      width: screen.width * 0.25,
      height: screen.width * 0.25,
    },
    textHeader: {
      color: styleableTheme[50],
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      padding: 10,
      fontSize: 16,
      backgroundColor: "#000",
      height: 40,
    },
  })
}

export default styles
