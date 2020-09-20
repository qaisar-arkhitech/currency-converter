import {connect} from "react-redux"

import {selectDefaultTheme} from "../redux/reducers/themes/selectors"
import {createChangeThemeAction} from "../redux/reducers/themes/actionCreators"

const mapStateToProps = (state) => ({
  defaultTheme: selectDefaultTheme(state),
})

const mapDispatchToProps = {
  changeTheme: createChangeThemeAction,
}

export default connect(mapStateToProps, mapDispatchToProps)
