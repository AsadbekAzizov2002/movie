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
const Similar = lazy(() => import("../features/movies/pages/Similar"))
const CastDetail = lazy (()=>import ("../features/cast/pages/CastDetail"))

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
				{path: "movie/:id", element: <MovieDitail />, children: [
						
						{
							index:true, element: <Similar />
						},
						{
							path:"cast", element:<CastDetail/>
						}

					]
				},
				{path:"cast/:id",element:<CastDetail/>}

			]
		},
	]);
};

export default React.memo(AppRoutes);
