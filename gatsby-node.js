const path = require("path")
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin")

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      plugins: [new DirectoryNamedWebpackPlugin()],
      alias: {
        $components: path.resolve(__dirname, "src/components"),
        $utils: path.resolve(__dirname, "src/utils"),
        $icons: path.resolve(__dirname, "src/icons"),
        $views: path.resolve(__dirname, "src/views"),
        $images: path.resolve(__dirname, "src/images"),
      },
    },
  })
}
