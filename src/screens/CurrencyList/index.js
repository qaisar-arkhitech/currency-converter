import React from "react"
import flow from "lodash/flow"
import {View, Text, StatusBar, FlatList} from "react-native"
import PropTypes from "prop-types"
import themeStyles from "./styles"
import {RowItem, RowSeparator} from "../../components/RowItem"
import connect from "./connect"

// CurrencyList Component content
export const CurrencyList = ({navigation, currencies, styleableTheme}) => {
  const styles = themeStyles(styleableTheme)
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return (
            <RowItem
              title={item.name}
              onPress={() => {
                navigation.pop()
              }}
              rightIcon={null}
            />
          )
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => <View />}
      />
    </View>
  )
}

// CurrencyList Proptypes
CurrencyList.propTypes = {
  currencies: PropTypes.object,
  navigation: PropTypes.object.isRequired,
}

// CurrencyList Default props
CurrencyList.defaultProps = {
  currencies: {},
}

export default flow([connect])(CurrencyList)
