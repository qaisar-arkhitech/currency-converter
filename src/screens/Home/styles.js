import {StyleSheet} from "react-native"

// Home: Styling here
const styles = (styleableTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: styleableTheme.pri50,
    },
    header: {
      alignItems: "flex-end",
      marginHorizontal: 20,
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
