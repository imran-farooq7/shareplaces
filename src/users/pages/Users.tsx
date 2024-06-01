import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "John",
			places: 1,
			image: "http://",
		},
	];
	return <UsersList items={USERS} />;
};
export default Users;
