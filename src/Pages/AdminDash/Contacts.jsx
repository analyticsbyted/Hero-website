import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contacts.css';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(10); // Number of contacts to display per page

  useEffect(() => {
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

    fetchContacts();
  }, []);

  // Logic to paginate contacts
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="contacts-container">
      <h2 className="centered-title">All Contacts</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(contacts.length / contactsPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
