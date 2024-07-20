module.exports = {
  encode: (binary, key) => {
    return binary
      .split(" ")
      .map((bin) => {
        const xorResult = parseInt(bin, 2) ^ key;
        return xorResult.toString(2).padStart(8, "0");
      })
      .join(" ");
  },
  decode: (binary, key) => {
    return binary
      .split(" ")
      .map((bin) => {
        const xorResult = parseInt(bin, 2) ^ key;
        return xorResult.toString(2).padStart(8, "0");
      })
      .join(" ");
  },
};
