import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    const navStyle={
        color: "#ffffff",
        textDecoration: 'none'
    }
    return (
        <nav>
            <Link to="/users-list" style={navStyle}>
            <h3>Logo</h3>
            </Link>
            <ul>
                <Link to="/users-list" style={navStyle}>
                    <li>Users List</li>
                </Link>
                <Link to="/add-user" style={navStyle}>
                    <li>Add User</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav