import { createProxyMiddleware } from "http-proxy-middleware";

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const options = {
  target: "https://www.argos.co.uk",
  changeOrigin: true,
};

const apiProxy = createProxyMiddleware(
  "/product-api/pdp-service/partNumber/(*)",
  options
);

export default function (req, res) {
  console.log("!!!!");
  apiProxy(req, res, (result) => {
    console.log("!!!!", result);
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}
