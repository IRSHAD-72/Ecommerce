const express = require("express");
const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

/**
 * @swagger
 * /upload-image:
 *   post:
 *     summary: Upload a product image
 *     tags: [Admin - Products]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               my_file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       500:
 *         description: Upload failed
 */
router.post("/upload-image", upload.single("my_file"), handleImageUpload);

/**
 * @swagger
 * /api/admin/products/add:
 *   post:
 *     summary: Add a new product
 *     tags: [Admin - Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/add", addProduct);

/**
 * @swagger
 * /edit/{id}:
 *   put:
 *     summary: Edit an existing product
 *     tags: [Admin - Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated
 *       404:
 *         description: Product not found
 */
router.put("/edit/:id", editProduct);

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Admin - Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 */
router.delete("/delete/:id", deleteProduct);

/**
 * @swagger
 * /get:
 *   get:
 *     summary: Fetch all products
 *     tags: [Admin - Products]
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/get", fetchAllProducts);

module.exports = router;
