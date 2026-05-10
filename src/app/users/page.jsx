import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/usersTable";
import { createUser, deleteUser } from "../lib/actions";
import AddUserModal from "../components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1>User Management : {users.length}</h1>
        <AddUserModal createUserAction={createUser} />
      </div>
      <UsersTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UsersPage;
