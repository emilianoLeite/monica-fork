import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<h1>My Contacts</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/create">Create Contact</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<ContactList />} />
						<Route path="/create" element={<CreateContact />} />
						<Route path="/edit/:id" element={<EditContact />} />
					</Routes>
				</header>
			</div>
		</Router>
	);
}

export default App;
