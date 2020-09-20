import {connect} from "react-redux"

import {selectStyleableTheme} from "../redux/reducers/themes/selectors"

const mapStateToProps = (state) => ({
  styleableTheme: selectStyleableTheme(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)
