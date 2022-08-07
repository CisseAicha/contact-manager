import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const AddContact = () => {
    let history = useHistory();
    const [contact, setContact] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
    });

    const {name, username, email, number} = contact;

    const onInputChange = e => {
        setContact({...contact, [e.target.name]: e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();
       await axios.post("http://localhost:3003/contacts", contact);
        history.push("/");
     };


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Contact</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-2">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="UserName"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="email" className="form-control form-control-lg"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Number"
                        name="number"
                        value={number}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <a className="btn btn-primary btn-block" href="/">Add Contact</a>
                </form>

            </div>

        </div>

    )
}

export default AddContact;