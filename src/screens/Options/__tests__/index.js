import React from "react"
import renderer from "react-test-renderer"
import Options from ".."

const createProps = () => ({
  classes: {},
})

describe("<Options />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Options {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
