const increment = require("./index")
const save = require("./index")

test.only("ADD ONE button increases break count by 1", () => {
    expect(count).toEqual(1)
})

test("SAVE button resets break count to 0 and adds count to previously recorded numbers", () => {
    expect(count).toEqual(0)
})