import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Register from "./screens/Register";
import ShippingScreen from "./screens/ShippingScreen";
import SingleProduct from "./screens/SingleProduct";

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} exact />
			<Route path='/search/:keyword' element={<HomeScreen />} exact />
			<Route path='/page/:pagenumber' element={<HomeScreen />} exact />
			<Route
				path='/search/:keyword/page/:pageNumber'
				element={<HomeScreen />}
				exact
			/>
			<Route path='/products/:id' element={<SingleProduct />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/profile' element={<ProfileScreen />} />
			<Route path='/cart/:id?' element={<CartScreen />} />
			<Route path='/shipping' element={<ShippingScreen />} />
			<Route path='/payment' element={<PaymentScreen />} />
			<Route path='/placeorder' element={<PlaceOrderScreen />} />
			<Route path='/order/:id' element={<OrderScreen />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
