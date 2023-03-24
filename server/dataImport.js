const express = require("express");
const asyncHandler = require("express-async-handler");
const products = require("./data/products");
const users = require("./data/users");
const Product = require("./models/productModel");
const User = require("./models/userModel");

const importData = express.Router();

importData.post(
	"/user",
	asyncHandler(async (req, res) => {
		await User.deleteMany({});
		const importUser = await User.insertMany(users);
		res.send({ importUser });
	})
);

importData.post(
	"/products",
	asyncHandler(async (req, res) => {
		await Product.deleteMany({});
		const importProducts = await Product.insertMany(products);
		res.send({ importProducts });
	})
);

module.exports = importData;
