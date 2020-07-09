module.exports = {
  rewrites: () => [
    {
      source: "api/product-api/pdp-service/partNumber/*",
      destination:
        "https://www.argos.co.uk/product-api/pdp-service/partNumber/*",
    },
  ],
};
