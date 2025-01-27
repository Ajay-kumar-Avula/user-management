import { Component } from "react";
import { getUsers, deleteUser } from "../api";
import "./index.css";

class UserList extends Component {
   state = {
      users: [],
      error: null,
    };
  

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await getUsers(); // Fetch users from the API
      this.setState({ users: response.data });
      console.log(response.data); 
    } catch (err) {
      this.setState({ error: "Failed to fetch users. Please try again later." });
    }
  };

  handleDelete = async (id) => {
    try {
      await deleteUser(id);
      this.setState({
        users: this.state.users.filter((user) => user.id !== id), // Simulate deletion
      });
      this.props.setSelectedUser(null);
    } catch (err) {
      this.setState({ error: "Failed to delete the user. Please try again." });
    }
  };

  render() {
    const { users, error } = this.state;
    return (
      <div>
        <button onClick={() => (window.location.href = "/add-user")}>
          Add User
        </button>
        {error && <p>{error}</p>}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address?.city || "N/A"}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company?.name || "N/A"}</td>
                <td>
                  <button onClick={() => (window.location.href = `/edit-user/${user.id}`)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => this.handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;



