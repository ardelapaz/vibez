import React, { Component } from 'react';
import {
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
	CircularProgress,
	withStyles
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const styles = (theme) => ({
	...theme.spread
});

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			handle: '',
			firstName: '',
			lastName: '',
			errors: {}
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({ errors: nextProps.UI.errors });
		}
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const newUserData = {
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			handle: this.state.handle,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		};
		this.props.signupUser(newUserData, this.props.history);
	};
	render() {
		const {
			classes,
			UI: { loading }
		} = this.props;
		const { errors } = this.state;
		return (
			<Grid
				container
				component='main'
				className={classes.root}
				direction='column'
				alignItems='center'
				justify='center'
				style={{ minHeight: '100vh' }}
			>
				<Container component='main' maxWidth='xs' justify='center'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography
							component='h1'
							variant='h5'
							className={classes.formTitle}
						>
							Sign up
						</Typography>
						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='fname'
										name='firstName'
										variant='outlined'
										required
										fullWidth
										id='firstName'
										label='First Name'
										autoFocus
										helperText={errors.firstName}
										error={errors.firstName ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='lname'
										helperText={errors.lastName}
										error={errors.lastName ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='handle'
										label='Username'
										type='handle'
										id='handle'
										autoComplete='username'
										helperText={errors.handle}
										error={errors.handle ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										margin='normal'
										required
										fullWidth
										id='email'
										label='Email Address'
										name='email'
										autoComplete='email'
										helperText={errors.email}
										error={errors.email ? true : false}
										onChange={this.handleChange}
										autoFocus
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='password'
										label='Password'
										type='password'
										id='password'
										autoComplete='current-password'
										helperText={errors.password}
										error={errors.password ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='confirmPassword'
										label='Confirm Password'
										type='password'
										id='confirmPassword'
										autoComplete='current-password'
										helperText={errors.confirmPassword}
										error={errors.confirmPassword ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
							</Grid>
							{errors.general && (
								<Typography variant='body2' className={classes.customError}>
									{errors.general}
								</Typography>
							)}
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='secondary'
								className={classes.submit}
								diabled={loading}
								onClick={this.handleSubmit}
							>
								Sign Up
								{loading && (
									<CircularProgress className={classes.progress} size={30} />
								)}
							</Button>
							<Grid container justify='flex-end'>
								<Grid item>
									<Link href='/login' variant='body2'>
										Already have an account? Sign in
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
					<Box mt={5}>
						<Copyright />
					</Box>
				</Container>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI
});

export default connect(
	mapStateToProps,
	{ signupUser }
)(withStyles(styles)(Signup));
