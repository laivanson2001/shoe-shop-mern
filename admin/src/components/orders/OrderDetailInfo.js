import React from "react";

const OrderDetailInfo = ({ order }) => {
	return (
		<div className='row mb-5 order-info-wrap'>
			<div className='col-md-6 col-lg-4'>
				<article className='icontext align-items-start'>
					<span className='icon icon-sm rounded-circle alert-success'>
						<i className='text-success fas fa-user'></i>
					</span>
					<div className='text'>
						<h6 className='mb-1'>Customer</h6>
						<p className='mb-1'>
							<span className='name-bold mb-2'>
								{order.user.name}
							</span>{" "}
							<br />
							<a href={`mailto:${order.user.email}`}>
								{order.user.email}
							</a>
						</p>
					</div>
				</article>
			</div>
			<div className='col-md-6 col-lg-4'>
				<article className='icontext align-items-start'>
					<span className='icon icon-sm rounded-circle alert-success'>
						<i className='text-success fas fa-truck-moving'></i>
					</span>
					<div className='text'>
						<h6 className='mb-1'>Order info</h6>
						<p className='mb-1'>
							<span className='mb-2'>Shipping:</span>{" "}
							{order.shippingAddress.country} <br />
							<span className='mb-2'>Pay method:</span>{" "}
							{order.paymentMethod}
						</p>
					</div>
				</article>
			</div>
			<div className='col-md-6 col-lg-4'>
				<article className='icontext align-items-start'>
					<span className='icon icon-sm rounded-circle alert-success'>
						<i className='text-success fas fa-map-marker-alt'></i>
					</span>
					<div className='text'>
						<h6 className='mb-1'>Deliver to</h6>
						<p className='mb-1'>
							<span className='mb-2'>Address:</span>{" "}
							{order.shippingAddress.address},{" "}
							{order.shippingAddress.city}.
							<br />
							<span className='mb-2'>POX:</span>{" "}
							{order.shippingAddress.postalCode}
						</p>
					</div>
				</article>
			</div>
		</div>
	);
};

export default OrderDetailInfo;
