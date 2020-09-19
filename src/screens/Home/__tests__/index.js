import React from "react"
import renderer from "react-test-renderer"
import Home from ".."

const createProps = () => ({
  classes: {},
})

describe("<Home />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Home {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
