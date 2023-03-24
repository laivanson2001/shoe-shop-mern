import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/Actions/userActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { toast } from "react-toastify";

const ProfileTabs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { loading: updateLoading } = userUpdateProfile;

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
		}
	}, [dispatch, user]);

	const submitHandler = (e) => {
		e.preventDefault();
		// Password match
		if (password !== confirmPassword) {
			toast.error("Password does not match");
		} else {
			dispatch(
				updateUserProfile({ id: user._id, name, email, password })
			);
			toast.success("Profile Updated");
		}
	};
	return (
		<>
			{error && <Message variant='alert-danger'>{error}</Message>}
			{loading && <Loading />}
			{updateLoading && <Loading />}
			<form className='row  form-container' onSubmit={submitHandler}>
				<div className='col-md-6'>
					<div className='form'>
						<label htmlFor='account-fn'>UserName</label>
						<input
							className='form-control'
							type='text'
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>

				<div className='col-md-6'>
					<div className='form'>
						<label htmlFor='account-email'>E-mail Address</label>
						<input
							className='form-control'
							type='email'
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form'>
						<label htmlFor='account-pass'>New Password</label>
						<input
							className='form-control'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form'>
						<label htmlFor='account-confirm-pass'>
							Confirm Password
						</label>
						<input
							className='form-control'
							type='password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
				<button type='submit'>Update Profile</button>
			</form>
		</>
	);
};

export default ProfileTabs;
