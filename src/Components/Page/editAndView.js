import React, {useState, useEffect} from 'react';
import './editAndView.css'
import {EditUser} from "../EditUser/editUser";
import {UserList} from "../UserList/userList";
import UserDataService from '../../Service/userDataService';

export const EditAndView = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState([{
        firstName: ''
    }]);

    useEffect(()=> {
        retrieveValues();
    },[]);

    const array = Object.values(users);

    const retrieveValues = () => {
        UserDataService.displayAllUsers()
            .then(response => {
                setUsers(response.data);
            }).catch(e => {
                console.log(e);
        });
    }

    const sendSelectedUser = (object) => {
        setSelectedUser(object);
    }

    return (
        <div className="container">
            <EditUser selectedUser={selectedUser}/>
            <UserList users={users} sendSelectedUser={sendSelectedUser}/>
        </div>
    )
}
