import React, { useState } from 'react';

interface Contact {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CreateContact: React.FC = () => {
  const [contact, setContact] = useState<Contact>({ name: '', email: '', phone: '', address: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the contact data to your API
    console.log(contact);
    setContact({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="address" value={contact.address} onChange={handleChange} placeholder="Address" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default CreateContact;
