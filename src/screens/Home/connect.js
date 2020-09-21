import {connect} from "react-redux"

import {selectStyleableTheme} from "../../redux/reducers/themes/selectors"

import {createLoadAction} from "../../redux/reducers/conversion/actionCreators"

const mapStateToProps = (state) => ({
  styleableTheme: selectStyleableTheme(state),
})

const mapDispatchToProps = {
  getRates: createLoadAction,
}

export default connect(mapStateToProps, mapDispatchToProps)
