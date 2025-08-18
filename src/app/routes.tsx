import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/MainLayout"))
const Home = lazy(() => import("../features/home/pages/Home"))
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"))
const Movies = lazy(() => import("../features/movies/pages/Movies"))
const MovieDitail = lazy(() => import("../features/movies/pages/MovieDitail"))
const Footer = lazy(() => import("../layout/components/Footer"))
const Search = lazy(() => import("../layout/components/Search"))
const Login = lazy(() => import("../layout/components/Login"))


const AppRoutes = () => {
	return useRoutes([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "bookmark", element: <Bookmark /> },
				{ path: "movies", element: <Movies /> },
				{ path: "search", element: <Search /> },
				{ path: "login", element: <Login /> },
				{ path: "footer", element: <Footer /> },
				{ path: "movie/:id", element: <MovieDitail /> },

			]
		},
	]);
};

export default React.memo(AppRoutes);
