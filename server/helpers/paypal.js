const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYjTDoLZ7UyEhRP-yDOrapGMHZ242NhsG41GvcH9Wq7fZxldXKZKvzpSEEAYwkG1M2A4Th47qPlghrqI",
  client_secret: "EJKRpHksnztYtURoYAde67z0HSUKQbAWmoyGfgRZBwTX296xo8589VlNeA1ypgjxi-Azok_k85usLbeD",
});

module.exports = paypal;
