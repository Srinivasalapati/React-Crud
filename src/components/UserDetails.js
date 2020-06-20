import React, { useState } from "react";

const UserDetails = () => {
    const userData = { firstName: "Srinivas", lastName: "Alapati", address: "Hyderabad", phoneNumber: "+917013822371", gpa: "9.0" }
    const [value, setData] = useState(userData)

    return (
        <div>
            <h2>User Details</h2>
            <div className="userDetails">
            <div className="left">
                <div className="profile-photo">
                    <span>Placeholder for Photo</span>
                </div>
            </div>
            <div className="right">
                <div className="row">
                    <div className="labelName">
                        FirstName
                    </div>
                    <div className="labelValue">
                        {value.firstName}
                    </div>
                </div>
                <div className="row">
                    <div className="labelName">
                        Last Name
                    </div>
                    <div className="labelValue">
                        {value.lastName}
                    </div>
                </div>
                <div className="row">
                    <div className="labelName">
                        Address
                    </div>
                    <div className="labelValue">
                        {value.address}
                    </div>
                </div>
                <div className="row">
                    <div className="labelName">
                        Phone Number
                    </div>
                    <div className="labelValue">
                        {value.phoneNumber}
                    </div>
                </div>
                <div className="row">
                    <div className="labelName">
                        GPA
                    </div>
                    <div className="labelValue">
                        {value.gpa}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserDetails