import React, { useState } from "react";

const AddData = () => {
    let formInitialData = {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        gpa: ""
    }
    const [value, setData] = useState(formInitialData)
    const submitForm = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
    }
    return (
        <div className="add-form">
            <h2>Add Form</h2>
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="label">
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="inputField">
                        <input type="text" name="firstName" id="fname" placeholder="First name" value={value.firstName} onChange={e => setData({...value, firstName:e.target.value})} />
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="inputField">
                        <input type="text" name="lastName" id="lname" placeholder="Last name" value={value.lastName} onChange={e => setData({...value, lastName:e.target.value})} />
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="inputField">
                        <input type="text" id="address" placeholder="Address" value={value.address} onChange={(e) => setData({...value,address:e.target.value})} />
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <div className="inputField">
                        <input type="text" id="phoneNumber" placeholder="Phone Number" value={value.phoneNumber} onChange={(e) => setData({...value,phoneNumber:e.target.value})} />
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label htmlFor="gpa">GPA</label>
                    </div>
                    <div className="inputField">
                        <input type="text" id="gpa" placeholder="GPA" value={value.gpa} onChange={(e) => setData({...value, gpa:e.target.value})} />
                    </div>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default AddData