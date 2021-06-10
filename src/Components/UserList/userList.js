import React from 'react'
import './userList.css'
export const UserList = () => {
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
                        <th>Col 1</th>
                        <th>Col 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1.1</td>
                        <td>2.1</td>
                    </tr>
                    <tr>
                        <td>1.2</td>
                        <td>2.2</td>
                    </tr>
                    <tr>
                        <td>1.3</td>
                        <td>2.3</td>
                    </tr>
                    <tr>
                        <td>1.4</td>
                        <td>2.4</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>2.5</td>
                    </tr>
                    <tr>
                        <td>1.4</td>
                        <td>2.4</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>2.5</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

