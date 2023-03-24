import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { login } from "../redux/Actions/userActions";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const redirect = searchParams.get("redirect")
		? searchParams.get("redirect")
		: "/";

	const userLogin = useSelector((state) => state.userLogin);
	const { error, loading, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			navigate(`/${redirect}`);
		}
	}, [userInfo, navigate, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	return (
		<>
			<Header />
			<div className='container d-flex flex-column justify-content-center align-items-center login-center'>
				{error && <Message variant='alert-danger'>{error}</Message>}
				{loading && <Loading />}
				<form
					className='Login col-md-8 col-lg-4 col-11'
					onSubmit={submitHandler}
				>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit'>Login</button>
					<p>
						<Link
							to={
								redirect
									? `/register?redirect=${redirect}`
									: "/register"
							}
						>
							Create Account
						</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default Login;
