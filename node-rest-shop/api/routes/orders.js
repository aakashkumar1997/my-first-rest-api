const express = require('express');
const router = express.Router();

router.get('/' , (req , res , next) => {
	res.status(200).json({
		message: 'Fetched Orders List'
	});
});

router.post('/' , (req , res , next) => {
	const order={
		productId: req.body.productId,
		quantity: req.body.quantity
	};
	res.status(201).json({
		message: 'Order Placed',
		order: order
	});
});

module.exports = router;