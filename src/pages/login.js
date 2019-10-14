import React, { Component } from 'react';

// MUI
import {
	Button,
	CssBaseline,
	TextField,
	Link,
	Container,
	Box,
	Grid,
	Typography,
	withStyles,
	CircularProgress
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Vibez Inc.
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const styles = (theme) => ({
	...theme.spread
});

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
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
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData, this.props.history);
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
			>
				<CssBaseline />
				<Container component='main' maxWidth='xs'>
					<div className={classes.paper}>
						<Typography
							component='h1'
							variant='h5'
							className={classes.formTitle}
						>
							Sign in
						</Typography>
						<form
							className={classes.form}
							noValidate
							onSubmit={this.handleSubmit}
						>
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
							<TextField
								variant='outlined'
								margin='normal'
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
							{errors.general && (
								<Typography
									variant='body2'
									color='red'
									className={classes.customError}
								>
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
								Sign In
								{loading && <CircularProgress size={30} />}
							</Button>
							<Grid container>
								<Grid item className={classes.center}>
									<Link href='/signup' variant='body2' color='textPrimary'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Container>
			</Grid>
		);
	}
}
const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI
});

const mapActionsToProps = {
	loginUser
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(Login));
