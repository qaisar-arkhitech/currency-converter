import {StyleSheet} from "react-native"

// RowItem: Styling here
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
})

export default styles
