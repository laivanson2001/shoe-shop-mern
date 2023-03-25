const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const orderRoute = express.Router();

// USER LOGIN ORDERS
orderRoute.get(
	"/",
	protect,
	asyncHandler(async (req, res) => {
		const order = await Order.find({ user: req.user._id }).sort({
			_id: -1,
		});
		res.json(order);
	})
);

// ADMIN GET ALL ORDERS
orderRoute.get(
	"/all",
	protect,
	admin,
	asyncHandler(async (req, res) => {
		const orders = await Order.find({})
			.sort({ _id: -1 })
			.populate("user", "id name email");
		res.json(orders);
	})
);

// GET ORDER BY ID
orderRoute.get(
	"/:id",
	protect,
	asyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id).populate(
			"user",
			"name email"
		);

		if (order) {
			res.json(order);
		} else {
			res.status(404);
			throw new Error("Order Not Found");
		}
	})
);

// CREATE ORDER
orderRoute.post(
	"/",
	protect,
	asyncHandler(async (req, res) => {
		const {
			orderItems,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		} = req.body;
		console.log(req.body);

		if (orderItems && orderItems.length === 0) {
			res.status(400);
			throw new Error("No order items");
		} else {
			const order = new Order({
				orderItems,
				user: req.user._id,
				shippingAddress,
				paymentMethod,
				itemsPrice,
				taxPrice,
				shippingPrice,
				totalPrice,
			});

			const createOrder = await order.save();
			res.status(201).json(createOrder);
		}
	})
);

// ORDER IS PAID
orderRoute.put(
	"/:id/pay",
	protect,
	asyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);

		if (order) {
			order.isPaid = true;
			order.paidAt = Date.now();
			order.paymentResult = {
				id: req.body.id,
				status: req.body.status,
				update_time: req.body.update_time,
				email_address: req.body.email_address,
			};

			const updatedOrder = await order.save();
			res.json(updatedOrder);
		} else {
			res.status(404);
			throw new Error("Order Not Found");
		}
	})
);

//ORDER IS DELIVERD
orderRoute.put(
	"/:id/delivered",
	protect,
	admin,
	asyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);

		if (order) {
			order.isDelivered = true;
			// order.isPaid = true;
			order.deliveredAt = Date.now();
			const updatedOrder = await order.save();
			res.json(updatedOrder);
		} else {
			res.status(404);
			throw new Error("Order Not Found");
		}
	})
);

module.exports = orderRoute;
