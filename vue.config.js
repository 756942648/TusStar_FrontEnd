module.exports = {
  devServer: {
    proxy: {
      // 当请求以/开头时，全部转换到http://localhost:8081这个服务器（自己的服务器是代理）
      // 同时需要把原始请求http://localhost:8080/...改为/...
      "/": {
        target: "http://47.95.195.192:3306:8081",
        changeOrigin: true
      }
    }
  }
};
