const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://github.com/rajutkarsh07/portfolio-updated",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
