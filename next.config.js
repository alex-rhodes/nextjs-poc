module.exports = {
  async rewrites() {
    return [
      {
        source: "/product-api/pdp-service/partNumber/",
        destination: "https://www.argos.co.uk",
      },
    ];
  },
};
