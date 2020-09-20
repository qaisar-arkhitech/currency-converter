import React from "react"
import renderer from "react-test-renderer"
import {RowItem, RowSeparator} from ".."

describe("<RowItem />", () => {
  const createProps = () => ({
    title: "test",
  })
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<RowItem {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

})

describe("<RowSeparator />", () => {
  const createProps = () => ({
    style: {
      backgroundColor: "#fff"
    },
  })
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<RowSeparator {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
