const ncc = require("@vercel/ncc");

module.exports = {
  buildJS: async (inputfile) => {
    return await ncc(inputfile, {
      minify: true,
    });
  },
};
