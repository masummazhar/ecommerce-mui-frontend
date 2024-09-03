import { createBrowserRouter, } from "react-router-dom";



import Info from "../pages/info";

import BasicGrid from "../components/basicGrid";
import BasicCard from "../components/card";
import Gallery from "../pages/Gallery";
import CategoryPage from "../pages/category";
import ErrorPage from "../pages/errorpage";
import Home from "../pages/home";
import User from "../pages/user";
import Contact from "../pages/contact";



const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,

		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <CategoryPage />,
			},
			{
				path: "/user",
				element: <User />,
			},
			{
				path: "/basicGrid",
				element: <BasicGrid />,
			},
			{
				path: "/basicCard",
				element: <BasicCard />,
			},
			{
				path: "/gallary",
				element: <Gallery />,
			},
			{
				path: "/user/:user_id",
				element: <Info />,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/blog",
				element: <BasicGrid/>,
			},
		],
	},
	
]);

export default routes