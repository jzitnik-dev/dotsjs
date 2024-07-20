module.exports = {
  toBinary: (str = "") => {
    return str
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  },
  toString: (binary = "") => {
    return binary
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  },
  dotsToBinary: (dots) => {
    return dots.replaceAll(".", "0").replaceAll(":", "1");
  },
  binaryToDots: (binary) => {
    return binary.replaceAll("0", ".").replaceAll("1", ":");
  },
};
