import React from 'react';
const UsersList = (props) => {
    return ( <ul>
        {props.users.map((user)=>(
            <li>{</li>
        ))}
    </ul>
    );
};

export default UsersList;