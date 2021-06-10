import React from 'react';
import {Link} from 'react-router-dom';
import './addUser.css'
export const AddUser = () => {
    return (
        <div className="edit-user">

            <div className="header-section">
                <h2 className="main-head">Add Users</h2>
                <h4 className="secondary-head">Insert Operation.</h4>
            </div>

            <label className="label">Name:</label><br/>
            <input className="input-field" type="text" placeholder="Enter the Name"/><br/>
            <button className="btn-submit" type ="submit">Submit</button>
            <Link className="btn-submit btn-submit-cancel">Cancel</Link>
        </div>
    )
}
