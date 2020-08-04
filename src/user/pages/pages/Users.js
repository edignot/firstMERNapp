import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            name: 'name1',
            id: 1,
            img:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
            placeCount: 1,
        },
        {
            name: 'name2',
            id: 2,
            img:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
            placeCount: 2,
        },
    ];
    return <UsersList users={USERS} />;
};

export default Users;
