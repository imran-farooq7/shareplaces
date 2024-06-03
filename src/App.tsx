import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./users/components/Layout";
import UserPlaces from "./users/pages/UserPlaces";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/:userId/places",
				element: <UserPlaces />,
			},
			{
				index: true,
				element: <Users />,
			},
			{
				path: "/place/new",
				element: <NewPlace />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
