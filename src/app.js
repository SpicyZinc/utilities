import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// instead of putting a chunk of code here, separate them into home.js
import Home from './components/home';

class App extends React.Component {
	render() {

		return (
			<Provider store={store}>
				<Router>
					<Home />
				</Router>
			</Provider>
		);
	}
}

export default App;
