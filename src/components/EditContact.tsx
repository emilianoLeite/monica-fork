import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
}

function onSubmit(...args: unknown[]) {
	console.log('Submitted: ', JSON.stringify(args, null, 2));
}
export default function EditContact() {
	let { id } = useParams();
	const contact: Contact = {
		id: Number(id),
		name: 'Contact',
		address: 'Lane 1',
		email: 'email',
		phone: '12345678',
	};
	const [editedContact, setEditedContact] = useState<Contact>(contact);

	if (!id) {
		return <Link to="/">Error, go back Home</Link>;
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedContact({
			...editedContact,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(editedContact);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={editedContact.name}
					onChange={handleChange}
				/>
			</label>
			<label>
				Email:
				<input
					type="text"
					name="email"
					value={editedContact.email}
					onChange={handleChange}
				/>
			</label>
			<label>
				Phone:
				<input
					type="text"
					name="phone"
					value={editedContact.phone}
					onChange={handleChange}
				/>
			</label>
			<label>
				Address:
				<input
					type="text"
					name="address"
					value={editedContact.address}
					onChange={handleChange}
				/>
			</label>
			<button type="submit">Save</button>
		</form>
	);
}
