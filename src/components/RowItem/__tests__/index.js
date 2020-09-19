import React from "react"
import renderer from "react-test-renderer"
import RowItem from ".."

const createProps = () => ({
  classes: {},
})

describe("<RowItem />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<RowItem {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
