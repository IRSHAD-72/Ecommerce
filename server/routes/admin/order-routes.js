const express = require("express");
const {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} = require("../../controllers/admin/order-controller");

const router = express.Router();

/**
 * @swagger
 * /admin/orders/get:
 *   get:
 *     summary: Get all orders of all users
 *     tags: [Admin - Orders]
 *     responses:
 *       200:
 *         description: List of all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Server error
 */
router.get("/get", getAllOrdersOfAllUsers);

/**
 * @swagger
 * /admin/orders/details/{id}:
 *   get:
 *     summary: Get specific order details by ID (admin)
 *     tags: [Admin - Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order details retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get("/details/:id", getOrderDetailsForAdmin);

/**
 * @swagger
 * /admin/orders/update/{id}:
 *   put:
 *     summary: Update order status by ID (admin)
 *     tags: [Admin - Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderStatus:
 *                 type: string
 *             required:
 *               - orderStatus
 *             example:
 *               orderStatus: "Delivered"
 *     responses:
 *       200:
 *         description: Order status updated
 *       404:
 *         description: Order not found
 */
router.put("/update/:id", updateOrderStatus);

module.exports = router;
