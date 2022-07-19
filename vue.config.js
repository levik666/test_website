module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test_website/" : "/",
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
