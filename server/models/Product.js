const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - price
 *       properties:
 *         image:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         brand:
 *           type: string
 *         price:
 *           type: number
 *         salePrice:
 *           type: number
 *         totalStock:
 *           type: number
 *         averageReview:
 *           type: number
 *       
 */

const ProductSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  category: String,
  brand: String,
  price: Number,
  salePrice: Number,
  totalStock: Number,
  averageReview: Number,
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
