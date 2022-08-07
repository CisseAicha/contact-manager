import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        loadContacts();

    },[]);

    const loadContacts = async () => {
        const result = await axios.get("http://localhost:3003/contacts");
        setContact(result.data.reverse());

    };
    const deleteContact = async id => {
      await axios.delete('http://localhost:3003/contacts/${id}')
      loadContacts();
    };
    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
  <thead class="tread-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      contacts.map((contact, index) => (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.email}</td>
            <td>{contact.number}</td>
            <td>
              <Link class="btn btn-primary mr-2" to={"/contacts/${user.id}"}>View</Link>
              <Link class="btn btn-outline-primary mr-2" to={"/contacts/edit/${contact.id}"}>Edit</Link>
              <Link class="btn btn-danger" onClick={() => deleteContact(contact.id)}>Delete</Link>
              </td> 
        </tr>
        

      ))}
   
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Home;