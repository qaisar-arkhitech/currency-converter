import React from "react"
import {Text, TouchableOpacity} from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"

// RowItem Component content
export const RowItem = ({title, onPress, rightIcon}) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {rightIcon}
  </TouchableOpacity>
)

// RowItem Proptypes
RowItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  rightIcon: PropTypes.node,
}

// RowItem Default props
RowItem.defaultProps = {
  onPress: () => {},
  rightIcon: null,
}

export default RowItem