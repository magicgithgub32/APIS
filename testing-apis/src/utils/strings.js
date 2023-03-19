const getWithoutSpaces = (text) => {
  return text.split(" ").join("");
};

const removeWord = (text, word) => {
  return text.replace(word, "").trim();
};

module.exports = { getWithoutSpaces, removeWord };
