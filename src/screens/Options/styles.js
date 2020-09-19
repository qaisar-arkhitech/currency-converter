import {StyleSheet} from "react-native"

// Options: Styling here
const styles = (styleableTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: styleableTheme.pri50,
    },
  })
}

export default styles
