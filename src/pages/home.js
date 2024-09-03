import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import ButtonAppBar from "../components/appBar";




const Home = () => {
	return (
		<div>
              <ButtonAppBar/>
		   
			
			<Outlet />
			<Footer />
		</div>
	);
};
export default Home;
