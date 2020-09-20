import React from "react"
import {View, SafeAreaView, ScrollView, StatusBar} from "react-native"
import PropTypes from "prop-types"
import flow from "lodash/flow"
import Entypo from "react-native-vector-icons/Entypo"
import Color from "color"
import themeStyles from "./styles"
import connect from "./connect"
import {RowItem, RowSeparator} from "../../components/RowItem"

// Themes Component content
export const Themes = ({themes, changeTheme, defaultTheme, styleableTheme}) => {
  const colors = Object.keys(themes) || []
  const styles = themeStyles(styleableTheme)
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="default" backgroundColor={styleableTheme[500]} />
      <ScrollView>
        {colors.map((color, index) => (
          <React.Fragment key={`theme-${index + 1}`}>
            <RowItem
              title={`Theme ${index + 1}`}
              onPress={() => changeTheme(color)}
              rightIcon={
                <View
                  style={{
                    flexDirection: "row",
                  }}>
                  {defaultTheme === color ? (
                    <View style={{marginRight: 12}}>
                      <Entypo name="check" size={20} />
                    </View>
                  ) : null}
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: color,
                    }}
                  />
                </View>
              }
            />
            <RowSeparator
              style={{
                backgroundColor: Color(styleableTheme[50]).darken(0.04).hex(),
              }}
            />
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

// Themes Proptypes
Themes.propTypes = {
  themes: PropTypes.object,
  changeTheme: PropTypes.func,
  defaultTheme: PropTypes.string,
  styleableTheme: PropTypes.object,
}

// Themes Default props
Themes.defaultProps = {
  themes: {},
  changeTheme: () => {},
  defaultTheme: "",
  styleableTheme: {},
}

export default flow([connect])(Themes)
