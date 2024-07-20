const substitute = require("./functions/substitute");
const bitManipulation = require("./functions/bitManipulation");
const xorEncoding = require("./functions/xorEncoding");
const bitwiseRotation = require("./functions/bitwiseRotation");
const dots = require("./functions/dots");
const build = require("./functions/build");

class DotsCompiler {
  static async compileProject(indexFileFullPath) {
    const { code } = await build.buildJS(indexFileFullPath);
    return this.compileSingleFile(code);
  }

  static compileSingleFile(code) {
    const key = 123; // XOR key, can be any number
    const shift = 3; // Bitwise rotation shift amount

    var substituted = substitute.encode(code);
    var binary = dots.toBinary(substituted);
    var manipulated = bitManipulation.encode(binary);
    var xored = xorEncoding.encode(manipulated, key);
    var rotated = bitwiseRotation.left(xored, shift);
    return dots.binaryToDots(rotated);
  }

  static decode(dotsCode) {
    const key = 123; // XOR key, must be the same as in compile
    const shift = 3; // Bitwise rotation shift amount, must be the same as in compile

    var binary = dots.dotsToBinary(dotsCode);
    var rotated = bitwiseRotation.right(binary, shift);
    var xored = xorEncoding.decode(rotated, key);
    var manipulated = bitManipulation.decode(xored);
    var substituted = dots.toString(manipulated);
    var script = substitute.decode(substituted);

    return script;
  }

  static run(code) {
    const script = this.decode(code);
    eval(script);
  }
}

module.exports = DotsCompiler;
