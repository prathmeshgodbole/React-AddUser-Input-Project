import React from 'react';
const UsersList = (props) => {
    return ( <ul>
        {props.users.map((user)=>(
            <li>{user.name} {user</li>
        ))}
    </ul>
    );
};

export default UsersList;