import React from "react"
import {View, SafeAreaView, StatusBar, ScrollView} from "react-native"
import PropTypes from "prop-types"
import flow from "lodash/flow"
import Entypo from "react-native-vector-icons/Entypo"
import themeStyles from "./styles"
import connect from "./connect"
import {RowItem} from "../../components/RowItem"

// Themes Component content
export const Themes = ({themes, changeTheme, defaultTheme, styleableTheme}) => {
  const colors = Object.keys(themes)
  const styles = themeStyles(styleableTheme)
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {colors.map((color, index) => (
          <RowItem
            key={`theme-${index + 1}`}
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
