import React, {useState} from "react"
import flow from "lodash/flow"
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import {SafeAreaView} from "react-native-safe-area-context"
import themeStyles from "./styles"
import connect from "./connect"
import KeyboardSpacer from "../../components/KeyboardSpacer"

// Home Component content
export const Home = ({navigation, styleableTheme}) => {
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const styles = themeStyles(styleableTheme)
  return (
    <View style={styles.root}>
      <StatusBar barStyle="default" />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <TextInput style={styles.input} />
        </View>
        <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
      </ScrollView>
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
