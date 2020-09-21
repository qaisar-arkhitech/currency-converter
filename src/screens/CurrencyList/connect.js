import {connect} from "react-redux"

import {selectStyleableTheme} from "../../redux/reducers/themes/selectors"
import {
  selectRatesData,
  selectRatesLoadingError,
  selectRatesLoader,
} from "../../redux/reducers/conversion/selectors"

const mapStateToProps = (state) => ({
  styleableTheme: selectStyleableTheme(state),

  currencies: selectRatesData(state),
  ratesLoadingError: selectRatesLoadingError(state),
  ratesLoader: selectRatesLoader(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)
