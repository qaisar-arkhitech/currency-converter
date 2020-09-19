import React, {useState} from "react"
import flow from "lodash/flow"
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import {SafeAreaView} from "react-native-safe-area-context"
import styles from "./styles"
import connect from "./connect"

// Home Component content
export const Home = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="default" />
      <ScrollView>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={{height: 1700, backgroundColor: "#00f"}}>
          <TextInput style={styles.input} />
        </View>
      </ScrollView>
    </View>
  )
}

// Home Proptypes
Home.propTypes = {
  navigation: PropTypes.object.isRequired,
}

// Home Default props
Home.defaultProps = {}

export default flow([connect])(Home)
