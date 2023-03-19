const { getWithoutSpaces, removeWord } = require("./strings");

describe("String utils", () => {
  it("returns a text without spaces", () => {
    const result = getWithoutSpaces("hola que tal");
    expect(result).toBe("holaquetal");
  });

  it("returns the string without the word passed", () => {
    const result = removeWord("hola que tal", "hola");
    expect(result).toBe("que tal");
  });
});
