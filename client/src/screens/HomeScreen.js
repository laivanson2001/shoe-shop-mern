import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import ShopSection from "../components/homeComponents/ShopSection";

const HomeScreen = () => {
	window.scrollTo(0, 0);
	return (
		<>
			<Header />
			<ShopSection />
			<CalltoActionSection />
			<ContactInfo />
			<Footer />
		</>
	);
};

export default HomeScreen;
