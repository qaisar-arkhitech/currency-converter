import React from "react"
import {SafeAreaView, StatusBar, ScrollView} from "react-native"
import PropTypes from "prop-types"
import Entypo from "react-native-vector-icons/Entypo"
import flow from "lodash/flow"
import themeStyles from "./styles"
import connect from "./connect"
import {RowItem} from "../../components/RowItem"

// Options Component content
export const Options = ({navigation, styleableTheme}) => {
  const styles = themeStyles(styleableTheme)
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="default" backgroundColor={styleableTheme[500]} />
      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => navigation.push("Themes")}
          rightIcon={<Entypo name="chevron-right" size={20} />}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

// Options Proptypes
Options.propTypes = {
  navigation: PropTypes.object.isRequired,
  styleableTheme: PropTypes.object,
}

// Options Default props
Options.defaultProps = {
  styleableTheme: {},
}

export default flow([connect])(Options)
