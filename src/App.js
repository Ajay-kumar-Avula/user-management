import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEditUser from "./components/AddEditUser";
import  { useState, useEffect } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from './components/api';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = async (user) => {
    try {
      const response = await addUser(user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (user) => {
    try {
      const response = await updateUser(user.id, user);
      setUsers(users.map(u => (u.id === user.id ? response.data : u)));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              users={users} 
              deleteUser={handleDeleteUser} 
              setSelectedUser={setSelectedUser} 
            />
          } 
        />
        <Route 
          path="/add-user" 
          element={
            <AddEditUser 
              addUser={handleAddUser} 
              updateUser={handleUpdateUser} 
              selectedUser={selectedUser} 
              setSelectedUser={setSelectedUser} 
            />
          } 
        />
        <Route 
          path="/edit-user/:id" 
          element={
            <AddEditUser 
              addUser={handleAddUser} 
              updateUser={handleUpdateUser} 
              selectedUser={selectedUser} 
              setSelectedUser={setSelectedUser} 
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;




