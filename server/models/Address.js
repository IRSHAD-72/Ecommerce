const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - userId
 *         - address
 *         - city
 *         - pincode
 *         - phone
 *       properties:
 *         userId:
 *           type: string
 *         address:
 *           type: string
 *         city:
 *           type: string
 *         pincode:
 *           type: string
 *         phone:
 *           type: string
 *         notes:
 *           type: string
 *       example:
 *         userId: "64bca58e8c83727d0c098123"
 *         address: "123 Street"
 *         city: "New York"
 *         pincode: "10001"
 *         phone: "1234567890"
 *         notes: "Please call on arrival"
 */

const AddressSchema = new mongoose.Schema(
  {
    userId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
