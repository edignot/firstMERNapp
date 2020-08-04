import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';

const UsersList = (props) => {
    if (props.users.length === 0) {
        return (
            <div className='center'>
                <h2>No users found.</h2>
            </div>
        );
    }
    return (
        <ul>
            {props.users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </ul>
    );
};

export default UsersList;
