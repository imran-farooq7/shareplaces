import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./users/components/Layout";
import UserPlaces from "./users/pages/UserPlaces";
import Users from "./users/pages/Users";
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
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
