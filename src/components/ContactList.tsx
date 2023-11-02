import React, { useEffect, useState } from 'react';
import CreateContact from './CreateContact';
import { Link } from 'react-router-dom';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setContacts([
      {
        address: 'Lane 1',
        email: 'email',
        id: 1,
        name: 'Contact',
        phone: '123456789'
      },
      {
        address: 'Lane 2',
        email: 'emails',
        id: 2,
        name: 'Contact 2',
        phone: '123456789'
      }
    ]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
  <tr key={contact.id}>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phone}</td>
    <td>{contact.address}</td>
    <td>
      <Link to={`/edit/${contact.id}`}>Edit</Link>
    </td>
  </tr>
))}
      </tbody>
    </table>

  );
};
