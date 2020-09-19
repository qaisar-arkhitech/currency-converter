import React from "react"
import {View, Text, StatusBar} from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"

// Home Component content
export const Home = () => (
  <View style={styles.root}>
    <StatusBar barStyle="default" />
    <Text>Home</Text>
  </View>
)

// Home Proptypes
Home.propTypes = {}

// Home Default props
Home.defaultProps = {}

export default Home
