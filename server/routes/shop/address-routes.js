const express = require("express");
const {
  addAddress,
  fetchAllAddress,
  editAddress,
  deleteAddress,
} = require("../../controllers/shop/address-controller");

const router = express.Router();



/**
 * @swagger
 * /api/shop/address/add:
 *   post:
 *     summary: Add a new address
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Address added
 *       500:
 *         description: Internal server error
 */
router.post("/add", addAddress);

/**
 * @swagger
 * /api/shop/address/get/{userId}:
 *   get:
 *     summary: Get all addresses for a user
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of addresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 */
router.get("/get/:userId", fetchAllAddress);

/**
 * @swagger
 * /delete/{userId}/{addressId}:
 *   delete:
 *     summary: Delete an address
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: addressId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Address deleted
 *       404:
 *         description: Not found
 */
router.delete("/delete/:userId/:addressId", deleteAddress);

/**
 * @swagger
 * /update/{userId}/{addressId}:
 *   put:
 *     summary: Update an address
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: addressId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Address updated
 *       404:
 *         description: Not found
 */
router.put("/update/:userId/:addressId", editAddress);

module.exports = router;
