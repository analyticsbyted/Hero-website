import React, { useState } from 'react';
import axios from 'axios';
import './GetContacts.css';

const GetContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [getContactId, setGetContactId] = useState('');
  const [deleteContactId, setDeleteContactId] = useState('');

  const fetchContacts = async () => {
    try {
      const apiUrl = import.meta.env.VITE_CONTACTS_URL;
      const response = await axios.get(apiUrl);
      setContacts(response.data);
      setError(null);
    } catch (err) {
      setError('An error occurred while fetching contacts. Please try again later.');
      setContacts([]);
    }
  };

  const handleGetContact = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_CONTACTS_URL}/${getContactId}`;
      console.log('API Endpoint:', apiUrl); // Log the API endpoint
      const response = await axios.get(apiUrl);
      console.log('Contact details:', response.data); // Log the fetched contact details
      // Handle the response, e.g., setContactDetails(response.data)
    } catch (err) {
      setError('An error occurred while fetching the contact. Please check the entered ID and try again.');
    }
  };

  const handleDeleteContact = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_CONTACTS_URL}/${deleteContactId}`;
      await axios.delete(apiUrl);
      // After successful deletion, refetch the contacts to update the list
      fetchContacts();
      setDeleteContactId('');
    } catch (err) {
      setError(`An error occurred while deleting the contact. Endpoint: ${apiUrl}. Please check the entered ID and try again.`);
    }
  };
  

  return (
    <div className="get-contacts">
      <h2 className="centered-title">Contacts</h2>
      <div className="button-container">
        <button onClick={fetchContacts} className="btn dark-btn">Get All Contacts</button>
        {/* "Add a Contact" button */}
        <button className="btn dark-btn">Add a Contact</button>
        {/* "Get a Contact by ID" button */}
        <button onClick={handleGetContact} className="btn dark-btn">Get a Contact by ID</button>
        {/* "Delete a Contact" button */}
        <button onClick={handleDeleteContact} className="btn dark-btn">Delete a Contact</button>
      </div>
      {/* Text box input field for supplying data */}
      <div className="query-text">
        <input
          type="text"
          placeholder="Enter data..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <div className="contacts-list">
        {contacts.map(contact => (
          <div key={contact.id} className="contact-item">
            <h4>{contact.name}</h4>
            <p>Id: {contact.id}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Subject: {contact.subject}</p>
            <p>Message: {contact.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetContacts;
