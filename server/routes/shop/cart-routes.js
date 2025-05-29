const express = require("express");
const {
  addToCart,
  fetchCartItems,
  deleteCartItem,
  updateCartItemQty,
} = require("../../controllers/shop/cart-controller");

const router = express.Router();

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Add product to cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: Product added to cart
 *       500:
 *         description: Server error
 */
router.post("/add", addToCart);

/**
 * @swagger
 * /get/{userId}:
 *   get:
 *     summary: Fetch cart items for a user
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of cart items
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 */
router.get("/get/:userId", fetchCartItems);

/**
 * @swagger
 * /update-cart:
 *   put:
 *     summary: Update quantity of a cart item
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *             required:
 *               - userId
 *               - productId
 *               - quantity
 *             example:
 *               userId: "64bca58e8c83727d0c098123"
 *               productId: "64bca58e8c83727d0c098999"
 *               quantity: 3
 *     responses:
 *       200:
 *         description: Cart item updated
 *       400:
 *         description: Bad request
 */
router.put("/update-cart", updateCartItemQty);

/**
 * @swagger
 * /{userId}/{productId}:
 *   delete:
 *     summary: Delete a cart item
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart item removed
 *       404:
 *         description: Item not found
 */
router.delete("/:userId/:productId", deleteCartItem);

module.exports = router;
