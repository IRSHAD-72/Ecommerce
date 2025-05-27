const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv").config({ path: "../.env" });
// const commonFeatureRouter = require("./routes/common/feature-routes");

const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox"; // or "live"
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "AYjTDoLZ7UyEhRP-yDOrapGMHZ242NhsG41GvcH9Wq7fZxldXKZKvzpSEEAYwkG1M2A4Th47qPlghrqI";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "EJKRpHksnztYtURoYAde67z0HSUKQbAWmoyGfgRZBwTX296xo8589VlNeA1ypgjxi-Azok_k85usLbeD";
paypal.configure({
  mode: "sandbox",
  client_id: "AYjTDoLZ7UyEhRP-yDOrapGMHZ242NhsG41GvcH9Wq7fZxldXKZKvzpSEEAYwkG1M2A4Th47qPlghrqI",
  client_secret: "EJKRpHksnztYtURoYAde67z0HSUKQbAWmoyGfgRZBwTX296xo8589VlNeA1ypgjxi-Azok_k85usLbeD",
});

module.exports = paypal;
