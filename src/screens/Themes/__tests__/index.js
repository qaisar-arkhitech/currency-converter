import React from "react"
import renderer from "react-test-renderer"
import Themes from ".."

const createProps = () => ({
  classes: {},
})

describe("<Themes />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Themes {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
