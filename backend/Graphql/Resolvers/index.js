const path = require("path");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const resolversArray = loadFilesSync(path.join(__dirname), {
  extensions: ["js"],
  extractExports: (fileExport) => {
    if (typeof fileExport === "function") {
      return fileExport("query_root");
    }
    return fileExport;
  },
});
module.exports = mergeResolvers(resolversArray);
