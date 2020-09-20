import React from "react"
import {View, StatusBar} from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"

// CustomStatusBar Component content
export const CustomStatusBar = ({backgroundColor, ...reset}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...reset} />
  </View>
)

// CustomStatusBar Proptypes
CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
}

// CustomStatusBar Default props
CustomStatusBar.defaultProps = {}

export default CustomStatusBar
