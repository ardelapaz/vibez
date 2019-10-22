import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

// MUI
import MuiThemeProvider from '../node_modules/@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '../node_modules/@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

// Pages
import home from './pages/home';
import login from './pages/login';
import user from './pages/user';
import signup from './pages/signup';

// Components
import AuthRoute from './util/AuthRoute';
import Navigation from './components/Layout/Navigation';
import NotFound from './util/NotFound';

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;

if (token) {
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = '/login';
	}
	store.dispatch({ type: SET_AUTHENTICATED });
	axios.defaults.headers.common['Authorization'] = token;
	store.dispatch(getUserData());
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNavbar: false
		};
	}
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Provider store={store}>
					<Router>
						<div className='App'>
							<Navigation />
							<Switch>
								<Route exact path='/' component={home} />
								<AuthRoute exact path='/login' component={login} />
								<AuthRoute exact path='/signup' component={signup} />
								<Route exact path='/users/:handle' component={user} />
								<Route
									exact
									path='/users/:handle/wave/:waveId'
									component={user}
								/>
								<Route component={NotFound} />
							</Switch>
						</div>
					</Router>
				</Provider>
			</MuiThemeProvider>
		);
	}
}

export default App;
