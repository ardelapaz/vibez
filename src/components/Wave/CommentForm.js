import React, { Component, Fragment } from 'react';

// MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { TextField, Button, Grid } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postComment } from '../../redux/actions/dataActions';

const styles = (theme) => ({
	...theme.spread
});

class CommentForm extends Component {
	state = {
		body: '',
		errors: {}
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({ errors: nextProps.UI.errors });
		}
		if (!nextProps.UI.errors && !nextProps.UI.loading) {
			this.setState({ body: '' });
		}
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.postComment(this.props.waveId, { body: this.state.body });
	};
	render() {
		const { classes, authenticated, loading } = this.props;
		const errors = this.state.errors;

		const commentFormMarkup = authenticated ? (
			<Grid item sm={12} style={{ textAlign: 'center' }}>
				<form onSubmit={this.handleSubmit}>
					<TextField
						name='body'
						type='text'
						label='Add a comment'
						error={errors.comment ? true : false}
						helperText={errors.comment}
						value={this.state.body}
						onChange={this.handleChange}
						fullWidth
						className={classes.textField}
						variant='outlined'
					/>
					<Button
						type='submit'
						variant='contained'
						color='secondary'
						className={classes.submitButton}
						disabled={loading || this.state.body === ''}
					>
						Submit
					</Button>
				</form>
			</Grid>
		) : null;
		return <Fragment>{commentFormMarkup}</Fragment>;
	}
}

const mapStateToProps = (state) => ({
	UI: state.UI,
	authenticated: state.user.authenticated
});
export default connect(
	mapStateToProps,
	{ postComment }
)(withStyles(styles)(CommentForm));
