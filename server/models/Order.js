const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *         title:
 *           type: string
 *         image:
 *           type: string
 *         price:
 *           type: string
 *         quantity:
 *           type: number
 *       required:
 *         - productId
 *         - title
 *         - price
 *         - quantity
 *
 *     AddressInfo:
 *       type: object
 *       properties:
 *         addressId:
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
 *
 *     Order:
 *       type: object
 *       required:
 *         - userId
 *         - cartItems
 *         - addressInfo
 *         - orderStatus
 *         - paymentMethod
 *         - paymentStatus
 *         - totalAmount
 *       properties:
 *         userId:
 *           type: string
 *         cartId:
 *           type: string
 *         cartItems:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         addressInfo:
 *           $ref: '#/components/schemas/AddressInfo'
 *         orderStatus:
 *           type: string
 *         paymentMethod:
 *           type: string
 *         paymentStatus:
 *           type: string
 *         totalAmount:
 *           type: number
 *         orderDate:
 *           type: string
 *           format: date-time
 *         orderUpdateDate:
 *           type: string
 *           format: date-time
 *         paymentId:
 *           type: string
 *         payerId:
 *           type: string
 *       example:
 *         userId: "64bca58e8c83727d0c098123"
 *         cartId: "64bca58e8c83727d0c098987"
 *         cartItems:
 *           - productId: "64bca58e8c83727d0c099999"
 *             title: "T-Shirt"
 *             image: "/images/tshirt.png"
 *             price: "30"
 *             quantity: 2
 *         addressInfo:
 *           addressId: "64bca58e8c83727d0c098333"
 *           address: "123 Street"
 *           city: "New York"
 *           pincode: "10001"
 *           phone: "1234567890"
 *           notes: "Leave at door"
 *         orderStatus: "Pending"
 *         paymentMethod: "PayPal"
 *         paymentStatus: "Paid"
 *         totalAmount: 60
 *         orderDate: "2024-10-01T12:00:00Z"
 *         orderUpdateDate: "2024-10-01T12:05:00Z"
 *         paymentId: "PAYID-EXAMPLE"
 *         payerId: "PAYER-1234"
 */

const OrderSchema = new mongoose.Schema({
  userId: String,
  cartId: String,
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: String,
  paymentMethod: String,
  paymentStatus: String,
  totalAmount: Number,
  orderDate: Date,
  orderUpdateDate: Date,
  paymentId: String,
  payerId: String,
});

module.exports = mongoose.model("Order", OrderSchema);
