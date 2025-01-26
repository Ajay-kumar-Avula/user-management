
import UserList from "../UserList";
import "./index.css";

const Home = ({ users, deleteUser, setSelectedUser }) => {
  return (
    <div className="container">
      <h1>User Management</h1>
      <UserList users={users} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default Home;



