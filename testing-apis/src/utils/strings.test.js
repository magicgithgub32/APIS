const { getWithoutSpaces } = require("./strings");

describe("String utils", () => {
  it("returns a text without spaces", () => {
    const result = getWithoutSpaces("hola que tal");
    expect(result).toBe("holaquetal");
  });
});
