import React from 'react';
import './editAndView.css'
import {EditUser} from "../EditUser/editUser";
import {UserList} from "../UserList/userList";
export const EditAndView = () => {
    return (
        <div>
            <EditUser/>
            <UserList/>
        </div>
    )
}
