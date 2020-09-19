import {StyleSheet} from "react-native"

// Themes: Styling here
const styles = (styleableTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: styleableTheme.pri50,
    },
  })
}

export default styles
