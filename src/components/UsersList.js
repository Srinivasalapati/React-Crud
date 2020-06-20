import React, { useState } from "react";
import { Link } from "react-router-dom";
const UsersList = () => {
    let usersData = [
        { id: 1, firstName: "Srinivas", lastName: "Alapati", address: "Hyderabad", phoneNumber: "+917013822371", gpa: "9.0" },
        { id: 2, firstName: "Sampath", lastName: "Ramakrishna", address: "Hyderabad", phoneNumber: "+917013822371", gpa: "9.8" },
        { id:3, firstName: "Venkat", lastName: "Kishore", address: "Hyderabad", phoneNumber: "+917013822371", gpa: "9.5" },
        { id:4, firstName: "Muhammad", lastName: "Blore", address: "Hyderabad", phoneNumber: "+917013822371", gpa: "9.5" },
        { id:5, firstName: "Tawkir", lastName: "Ahmad", address: "Hyderabad", phoneNumber: "+917013822371", gpa: "9.5" }

    ]
    const [users, setUsers] = useState(usersData)
    let detailStyle = {
        paddingRight: '10px'
    }
    return (
        <div className="usersList">
            <h2>Users List</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>GPA</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id}><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.phoneNumber}</td><td>{user.gpa}</td><td><span style={detailStyle}><Link to={"/user-details/${user.id}"}>View</Link></span><span>delete</span></td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList