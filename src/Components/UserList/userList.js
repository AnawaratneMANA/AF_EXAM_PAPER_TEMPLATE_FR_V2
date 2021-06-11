import React from 'react'
import './userList.css'
export const UserList = ({users, sendSelectedUser}) => {

    console.log(users.users.length)
    console.log(users.users)
    return (
        <div className="edit-user-table">
            <div className="header-section">
                <h2 className="main-head">Add Users</h2>
                <h4 className="secondary-head">Insert Operation.</h4>
            </div>

            <div className="tableFixHead">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>Sample Value</td>
                        </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

