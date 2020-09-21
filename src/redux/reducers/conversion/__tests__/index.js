import conversion, {initialState} from ".."

describe("conversion reducer", () => {
  it("should return the initial state", () => {
    expect(conversion(undefined, {})).toEqual(initialState)
    expect(conversion(undefined, {})).toMatchSnapshot()
  })
  it("should handle GET_POST_SUCCESS", () => {})
  it("should handle UPDATE_POST_SUCCESS", () => {})
  it("should handle GET_POST_FAIL", () => {})
  it("should handle GET_POST_START", () => {})
})
