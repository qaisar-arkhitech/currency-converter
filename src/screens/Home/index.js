import React from "react"
import {View, Text, StatusBar} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import styles from "./styles"

// Home Component content
export const Home = () => (
  <View style={styles.root}>
    <StatusBar barStyle="default" />
    <Entypo name="cog" size={32} color="#fff" />
    <Text>Home</Text>
  </View>
)

// Home Proptypes
Home.propTypes = {}

// Home Default props
Home.defaultProps = {}

export default Home
