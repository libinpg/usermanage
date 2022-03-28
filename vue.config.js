module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "assets" : "@/assets",
        "views" : "@/views",
        "components" : "@/components",
        "common" : "@/common"
      }
    }
  }
}
