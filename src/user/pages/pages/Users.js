import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            name: 'name1',
            id: 1,
            img: 'url1',
            placeCount: 1,
        },
        {
            name: 'name2',
            id: 2,
            img: 'url2',
            placeCount: 2,
        },
    ];
    return <UsersList users={USERS} />;
};

export default Users;
