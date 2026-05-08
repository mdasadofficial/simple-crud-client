import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/usersTable';

const UsersPage = async() => {

    const users = await getUsers();
    return (
        <div>
            <h1>User Management : {users.length}</h1>
            <UsersTable users={users}/>
        </div>
    );
};

export default UsersPage;