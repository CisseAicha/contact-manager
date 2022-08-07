import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditContact = () => {
    let history = useHistory();
    const {id} = useParams();
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
    useEffect(() => {
        loadContacts();

    }, []);

    const onSubmit = async e => {
        e.preventDefault();
       await axios.put("http://localhost:3003/contacts/${id}", contact);
       history.push("/");
        
     };

     const loadContacts = async () => {
        const result = await axios.get('http://localhost:3003/contacts/${id}');
        setContact(result.data);   
     };


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A Contact</h2>
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
                    <a className="btn btn-warning btn-block" href="/"> Update Contact</a>
                </form>

            </div>

        </div>

    )
}

export default EditContact;