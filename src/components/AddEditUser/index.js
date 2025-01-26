import  { useEffect } from "react";
import UserForm from "../UserForm";
import { useParams } from "react-router-dom";
import './index.css';

const AddEditUser = ({ addUser, updateUser, selectedUser, setSelectedUser }) => {
  const { id } = useParams();

  useEffect(() => {
    setSelectedUser(id ? selectedUser : null);
  }, [id, selectedUser, setSelectedUser]);

  return (
    <div className="container">
      <h1>{id ? "Edit User" : "Add User"}</h1>
      <UserForm 
        userId={id} 
        addUser={addUser} 
        updateUser={updateUser} 
        selectedUser={selectedUser} 
      />
    </div>
  );
};

export default AddEditUser;



