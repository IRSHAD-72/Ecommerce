const express = require("express");
const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Server error
 */
router.post("/create", createOrder);

/**
 * @swagger
 * /capture:
 *   post:
 *     summary: Capture payment for an order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentId:
 *                 type: string
 *               payerId:
 *                 type: string
 *               orderId:
 *                 type: string
 *             required:
 *               - paymentId
 *               - payerId
 *               - orderId
 *             example:
 *               paymentId: "PAYID-EXAMPLE"
 *               payerId: "PAYER-1234"
 *               orderId: "64bca58e8c83727d0c091234"
 *     responses:
 *       200:
 *         description: Payment captured
 *       500:
 *         description: Payment failure
 */
router.post("/capture", capturePayment);

/**
 * @swagger
 * /list/{userId}:
 *   get:
 *     summary: Get all orders for a user
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       404:
 *         description: Orders not found
 */
router.get("/list/:userId", getAllOrdersByUser);

/**
 * @swagger
 * /details/{id}:
 *   get:
 *     summary: Get order details by ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order detail
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get("/details/:id", getOrderDetails);

module.exports = router;
