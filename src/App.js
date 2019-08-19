import React, { Component, Fragment } from 'react';
import NavBar from '../src/components/UiComponents/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage';
import './App.css';

class App extends Component {

	render() {
		return (
			<Fragment>
				<NavBar/>
				<HomePage />
			</Fragment>
		);
	}
}

export default App;
