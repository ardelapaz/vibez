import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	AppBar,
	Toolbar,
	Button,
	Avatar,
	IconButton,
	Typography
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Login from '@material-ui/icons/Person';
import Logout from '@material-ui/icons/ExitToApp';
import Signup from '@material-ui/icons/Create';

import Notifications from './Notifications';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const styles = (theme) => ({
	...theme.spread
});

export class Navigation extends Component {
	handleLogout = () => {
		this.props.logoutUser();
	};
	render() {
		const {
			classes,
			user: {
				authenticated,
				credentials: { handle, firstName, imageUrl }
			}
		} = this.props;

		let authenticatedButton = authenticated ? (
			<Button
				color='inherit'
				onClick={this.handleLogout}
				startIcon={<Logout color='secondary' />}
				component={Link}
				to='/login'
			>
				Signout
			</Button>
		) : (
			<Fragment>
				<Button
					color='inherit'
					component={Link}
					to='/login'
					startIcon={<Login color='secondary' />}
				>
					Login
				</Button>
				<Button
					color='inherit'
					component={Link}
					to='/signup'
					startIcon={<Signup color='secondary' />}
				>
					Signup
				</Button>
			</Fragment>
		);

		return (
			<AppBar position='sticky'>
				<Toolbar>
					<a href='/' className={classes.navImage}>
						<img
							src='/vibezblack.png'
							alt='Vibez'
							className={classes.navImage}
						/>
					</a>
					<div className={classes.navbarButtons}>
						{authenticated && (
							<IconButton component={Link} to='/'>
								<HomeIcon color='secondary' />
							</IconButton>
						)}
						{authenticated && <Notifications />}
						{authenticated && (
							<Button
								component={Link}
								to={`/users/${handle}`}
								startIcon={
									<Avatar src={imageUrl} className={classes.navAvatar} />
								}
							>
								<Typography
									variant='button'
									color='textPrimary'
									fontWeight='fontWeightBold'
								>
									{firstName}
								</Typography>
							</Button>
						)}
						{authenticatedButton}
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

const mapActionsToProps = { logoutUser };

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(Navigation));
