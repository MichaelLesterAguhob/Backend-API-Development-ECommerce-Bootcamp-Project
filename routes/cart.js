
const express = require('express');
const cartController = require("../controllers/cart");
const { verify, verifyAdmin } = require("../auth");

const router = express.Router();

router.get("/get-cart", verify, cartController.getCart);
router.post("/add-to-cart", verify, cartController.addToCart);
router.patch("/update-cart-quantity", verify, cartController.updateCartQuantity);




module.exports = router; 