import  { Component } from "react";
import { addUser, getUserById, updateUser } from "../api";

import './index.css';

class UserForm extends Component {
  
    state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      error: null,
    };
  

  componentDidMount() {
    if (this.props.userId) {
      this.fetchUserDetails();
    }
  }

  fetchUserDetails = async () => {
    try {
      const response = await getUserById(this.props.userId);
      const user = response.data;

      this.setState({
        id: user.id || "",
        firstName: user.name.split(" ")[0] || "",
        lastName: user.name.split(" ")[1] || "",
        email: user.email || "",
        department: user.department || "",
      });
    } catch (err) {
      this.setState({ error: "Failed to fetch user details." });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      id: this.state.id,
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      department: this.state.department,
    };

    try {
      if (this.props.userId) {
        await updateUser(this.props.userId, user);
        alert("User updated successfully!");
      } else {
        await addUser(user);
        alert("User added successfully!");
      }
      window.location.href = "/";
    } catch (err) {
      this.setState({ error: "Failed to save user. Please try again." });
    }
  };

  render() {
    return (
      <div className='container'>
      <form onSubmit={this.handleSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={this.state.id}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={this.state.department}
          onChange={this.handleInputChange}
          required
        />
        <button type="submit">
          {this.props.userId ? "Update User" : "Add User"}
        </button>
      </form>
      </div>
    );
  }
}

export default UserForm;









