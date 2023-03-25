import React, { useEffect } from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../redux/Actions/OrderActions";
import { listProducts } from "../../redux/Actions/ProductActions";

const Main = () => {
	const orderGetAll = useSelector((state) => state.orderList);
	const { loading, error, orders } = orderGetAll;

	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	const dispatch = useDispatch();
	useEffect(() => {
		listOrders();
		listProducts();
	}, [dispatch]);
	return loading ? (
		<Loading />
	) : error ? (
		<Message variant={"alert-danger"}>{error}</Message>
	) : (
		<>
			<section className='content-main'>
				<div className='content-header'>
					<h2 className='content-title'> Dashboard </h2>
				</div>
				{/* Top Total */}
				<TopTotal orders={orders} products={products} />

				<div className='row'>
					{/* STATICS */}
					<SaleStatistics />
					<ProductsStatistics />
				</div>

				{/* LATEST ORDER */}
				<div className='card mb-4 shadow-sm'>
					<LatestOrder
						orders={orders}
						loading={loading}
						error={error}
					/>
				</div>
			</section>
		</>
	);
};

export default Main;
