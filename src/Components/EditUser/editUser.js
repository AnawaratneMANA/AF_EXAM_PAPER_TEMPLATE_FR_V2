import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './editUser.css'
import useDeepCompareEffect from "use-deep-compare-effect";
export const EditUser = ({selectedUser}) => {

    useEffect(()=> {
        console.log("Print Something over change")
    }, [selectedUser])


    return (
            <div className="edit-user">
                <div className="header-section">
                    <h2 className="main-head">Edit Users</h2>
                    <h4 className="secondary-head">Insert Operation.</h4>
                </div>

                <label className="label">Name:</label><br/>
                <input value={selectedUser.firstName} className="input-field" type="text" placeholder="Enter the Name"/><br/>
                <button className="btn-submit" type ="submit">Submit</button>
                <Link className="btn-submit btn-submit-cancel">Cancel</Link>
            </div>
    )
}
