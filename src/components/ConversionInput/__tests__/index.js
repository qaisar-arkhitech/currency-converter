import React from "react"
import renderer from "react-test-renderer"
import ConversionInput from ".."

const createProps = () => ({
  classes: {},
})

describe("<ConversionInput />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<ConversionInput {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
