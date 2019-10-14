import React, { Component, Fragment } from 'react';

// MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { deleteWave } from '../../redux/actions/dataActions';

// Icons
import { DeleteOutline } from '@material-ui/icons';

// Components
import TipIconButton from '../../util/TipIconButton';

const styles = (theme) => ({
	...theme.spread
});

export class DeleteWave extends Component {
	state = {
		open: false
	};
	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	deleteWave = () => {
		this.props.deleteWave(this.props.waveId);
		this.setState({ open: false });
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<TipIconButton
					tip='Delete Wave'
					onClick={this.handleOpen}
					btnClassName={classes.deleteButton}
				>
					<DeleteOutline />
				</TipIconButton>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					fullWidth
					maxWidth='sm'
				>
					<DialogTitle>Are you sure you want to delete this wave?</DialogTitle>
					<DialogActions>
						<Button onClick={this.handleClose} color='default'>
							Cancel
						</Button>
						<Button onClick={this.deleteWave} className={classes.error}>
							Delete
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

export default connect(
	null,
	{ deleteWave }
)(withStyles(styles)(DeleteWave));
