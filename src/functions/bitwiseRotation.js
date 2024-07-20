module.exports = {
  left: (binary, shift) => {
    return binary
      .split(" ")
      .map((bin) => {
        const bits = bin.split("");
        for (let i = 0; i < shift; i++) {
          bits.push(bits.shift());
        }
        return bits.join("");
      })
      .join(" ");
  },
  right: (binary, shift) => {
    return binary
      .split(" ")
      .map((bin) => {
        const bits = bin.split("");
        for (let i = 0; i < shift; i++) {
          bits.unshift(bits.pop());
        }
        return bits.join("");
      })
      .join(" ");
  },
};
