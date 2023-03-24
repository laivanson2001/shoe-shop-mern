import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRouter from "./PrivateRouter";
import { listOrders } from "./redux/Actions/OrderActions";
import { listProducts } from "./redux/Actions/ProductActions";
import "./responsive.css";
import AddProduct from "./screens/AddProduct";
import CategoriesScreen from "./screens/CategoriesScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import NotFound from "./screens/NotFound";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductScreen from "./screens/productScreen";
import UsersScreen from "./screens/UsersScreen";

function App() {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listProducts());
			dispatch(listOrders());
		}
	}, [userInfo, dispatch]);
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route element={<PrivateRouter />}>
				<Route path='/' element={<HomeScreen />} exact />
				<Route path='/products' element={<ProductScreen />} />
				<Route path='/category' element={<CategoriesScreen />} />
				<Route path='/orders' element={<OrderScreen />} />
				<Route path='/order/:id' element={<OrderDetailScreen />} />
				<Route path='/addproduct' element={<AddProduct />} />
				<Route path='/users' element={<UsersScreen />} />
				<Route
					path='/product/:id/edit'
					element={<ProductEditScreen />}
				/>
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
