module.exports = {
  encode: (binary) => {
    // Reverse the bits in each byte
    return binary
      .split(" ")
      .map((bin) => bin.split("").reverse().join(""))
      .join(" ");
  },
  decode: (binary) => {
    // Reverse the bits back to original
    return binary
      .split(" ")
      .map((bin) => bin.split("").reverse().join(""))
      .join(" ");
  },
};
