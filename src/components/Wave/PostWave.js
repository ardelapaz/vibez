import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MUI
import withStyles from '@material-ui/core/styles/withStyles';
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	TextField,
	Button
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postWave } from '../../redux/actions/dataActions';

// Util
import NoImg from '../../images/no-img.png';


const styles = (theme) => ({
	...theme.spread
});

class PostWave extends Component {
	state = {
		body: '',
		errors: {}
	};
	componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({ errors: nextProps.UI.errors });
		}
		if (!nextProps.UI.errors && !nextProps.UI.loading) {
			this.setState({ body: '', errors: {} });
		}
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.postWave({ body: this.state.body });
	};
	render() {
		const { errors } = this.state;
		const {
			classes,
			user: {
				credentials: { handle, imageUrl }
			},
			UI: { loading }
		} = this.props;

		return (
			<Card className={classes.card}>
				<Avatar
					alt='Remy Sharp'
					src={imageUrl ? imageUrl : NoImg}
					className={classes.cardAvatar}
				/>
				<CardContent className={classes.postWave}>
					<Typography
						variant='h5'
						component={Link}
						to={`/users/${handle}`}
						color='secondary'
					></Typography>
					<form onSubmit={this.handleSubmit}>
						<TextField
							name='body'
							type='text'
							multiline
							rows='3'
							placeholder='~ Start a wave ~'
							className={classes.textField}
							value={this.state.body}
							onChange={this.handleChange}
							fullWidth
							variant='outlined'
							error={errors.body ? true : false}
							helperText={errors.body}
						/>
						<Button
							type='submit'
							variant='contained'
							color='secondary'
							className={classes.submitButton}
							disabled={loading || this.state.body === ''}
						>
							Post
						</Button>
					</form>
				</CardContent>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI
});

export default connect(
	mapStateToProps,
	{ postWave }
)(withStyles(styles)(PostWave));
