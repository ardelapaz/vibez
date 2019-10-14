import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Redux
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';

// MUI
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core';

// Icons
import EditIcon from '@material-ui/icons/Edit';

// Components
import TipIconButton from '../../util/TipIconButton';

const styles = (theme) => ({
	...theme.spread
});

class EditDetails extends Component {
	state = {
		bio: '',
		soundcloud: '',
		location: '',
		open: false
	};

	mapUserDetailsToState = (credentials) => {
		this.setState({
			bio: credentials.bio ? credentials.bio : '',
			soundcloud: credentials.soundcloud ? credentials.soundcloud : '',
			location: credentials.location ? credentials.location : ''
		});
	};

	componentDidMount() {
		const { credentials } = this.props;
		this.mapUserDetailsToState(credentials);
	}
	handleOpen = () => {
		this.setState({ open: true });
		this.mapUserDetailsToState(this.props.credentials);
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = () => {
		const userDetails = {
			bio: this.state.bio,
			soundcloud: this.state.soundcloud,
			location: this.state.location
		};
		this.props.editUserDetails(userDetails);
		this.handleClose();
	};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<TipIconButton tip='Edit profile details' onClick={this.handleOpen}>
					<EditIcon color='secondary' />
				</TipIconButton>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					fullWidth
					maxWidth='sm'
				>
					<DialogTitle>Edit details</DialogTitle>
					<DialogContent>
						<form>
							<TextField
								name='bio'
								type='text'
								label='Bio'
								multiline
								rows='3'
								placeholder='Describe yourself!'
								className={classes.textField}
								value={this.state.bio}
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name='soundcloud'
								type='text'
								label='Soundcloud'
								placeholder='Enter your soundcloud link'
								className={classes.textField}
								value={this.state.soundcloud}
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name='location'
								type='text'
								label='Location'
								placeholder='Where are you?'
								className={classes.textField}
								value={this.state.location}
								onChange={this.handleChange}
								fullWidth
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color='textPrimary'>
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color='secondary'>
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	credentials: state.user.credentials
});

export default connect(
	mapStateToProps,
	{ editUserDetails }
)(withStyles(styles)(EditDetails));
