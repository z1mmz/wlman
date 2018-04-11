import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';


class NavBar extends Component {
	render() {
		const styles = {
			navStyle: {
				backgroundColor: 'white',
				borderStyle: 'none'
			}

		}
		return (
			<Navbar  style={styles.navStyle}>
		<Navbar.Header>
			<Navbar.Brand>
				Competition Manager
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		</Navbar.Collapse>
	</Navbar>


		);
	}
}

export default NavBar;
