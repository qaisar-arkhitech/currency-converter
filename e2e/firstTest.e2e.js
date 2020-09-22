describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible()
  })

  it("should show hello screen after tap", async () => {
    await element(by.id("reverse_button")).tap()
    await expect(element(by.text("Reverse Currencies"))).toBeVisible()
  })

  it("should show hello screen after tap", async () => {
    await expect(element(by.id("conversion_input_1"))).toBeVisible()
    await element(by.id("conversion_input_1")).typeText("I also typed this")
    await element(by.id("conversion_input_1")).tapReturnKey()
    await element(by.id("conversion_input_1")).clearText()
  })

  it("should chanage theme", async () => {
    await element(by.id("options_screen_button")).tap()
    await element(by.id("themes")).tap()
    await element(by.id("theme-3")).tap()
  })
})
