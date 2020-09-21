import React from "react"
import renderer from "react-test-renderer"
import CurrencyList from ".."

const createProps = () => ({
  classes: {},
})

describe("<CurrencyList />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<CurrencyList {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
