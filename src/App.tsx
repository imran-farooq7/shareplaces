import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./users/components/Layout";
import UserPlaces from "./users/pages/UserPlaces";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace, {
	loader as updatePlaceLoader,
} from "./places/pages/UpdatePlace";

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
				path: "/places/new",
				element: <NewPlace />,
			},
			{
				path: "/places/:pid",
				element: <UpdatePlace />,
				loader: updatePlaceLoader,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
