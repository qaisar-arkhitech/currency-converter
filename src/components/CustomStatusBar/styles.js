import {Platform, StatusBar, StyleSheet} from "react-native"

const StatusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight

// CustomStatusBar: Styling here
const styles = StyleSheet.create({
  statusBar: {
    height: StatusBarHeight,
  },
})

export default styles
