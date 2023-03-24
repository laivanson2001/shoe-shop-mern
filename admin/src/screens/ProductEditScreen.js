import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditProductMain from "./../components/products/EditproductMain";
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
	const { id } = useParams();
	return (
		<>
			<Sidebar />
			<main className='main-wrap'>
				<Header />
				<EditProductMain productId={id} />
			</main>
		</>
	);
};
export default ProductEditScreen;
