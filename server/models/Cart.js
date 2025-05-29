const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     CartItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *         quantity:
 *           type: number
 *       required:
 *         - productId
 *         - quantity
 *       example:
 *         productId: "64bca58e8c83727d0c098999"
 *         quantity: 2
 * 
 *     Cart:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CartItem'
 *       required:
 *         - userId
 *         - items
 *       example:
 *         userId: "64bca58e8c83727d0c098123"
 *         items:
 *           - productId: "64bca58e8c83727d0c098999"
 *             quantity: 2
 */

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
