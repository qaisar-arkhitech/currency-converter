import React, {useEffect, useState} from "react"
import flow from "lodash/flow"
import {View, StatusBar, TouchableOpacity, Image, Text} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import {SafeAreaView} from "react-native-safe-area-context"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

import {KeyboardSpacer} from "../../components/KeyboardSpacer"
import {ConversionInput} from "../../components/ConversionInput"
import {ReverseButton} from "../../components/ReverseButton"
import themeStyles from "./styles"
import connect from "./connect"

// Home Component content
export const Home = ({navigation, styleableTheme, getRates}) => {
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const styles = themeStyles(styleableTheme)

  useEffect(() => {
    getRates()
  }, [])

  return (
    <View style={styles.root} testID="welcome">
      <StatusBar barStyle="default" backgroundColor={styleableTheme[500]} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          testID="options_screen_button"
          onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
      <KeyboardAwareScrollView scrollEnabled={scrollEnabled} behavior="padding">
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              keyboardType="numeric"
              testID="conversion_input_1"
            />
            <ConversionInput editable={false} testID="conversion_input_2" />
            <ReverseButton text="Reverse Currencies" onPress={() => {}} />
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

// Home Proptypes
Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  styleableTheme: PropTypes.object,
}

// Home Default props
Home.defaultProps = {
  styleableTheme: {},
}

export default flow([connect])(Home)
