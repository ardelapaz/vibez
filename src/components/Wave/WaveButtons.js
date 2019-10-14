import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';

// Redux
import { connect } from 'react-redux';
import { upvoteWave, unupvoteWave } from '../../redux/actions/dataActions';

// Icons
import { Chat } from '@material-ui/icons';

// Components
import WaveDialog from './WaveDialog';
import FavoriteButton from './FavoriteButton';

const styles = (theme) => ({
	...theme.spread
});

export class WaveButtons extends Component {
	state = {
		commentBox: false
	};
	handleCommentClick = () => {
		this.setState({ commentBox: true });
	};
	render() {
		const {
			classes,
			wave: { userHandle, waveId, upvoteCount, commentCount },
			user: {
				authenticated,
				credentials: { handle }
			}
		} = this.props;

		return (
			<div className={classes.buttonsContainer}>
				<div className={classes.waveButtons}>
					<FavoriteButton waveId={waveId} />
					{upvoteCount}
				</div>
				<div className={classes.waveButtons}>
					<WaveDialog
						waveId={waveId}
						userHandle={userHandle}
						openDialog={this.props.openDialog}
						commentBox={this.state.commentBox}
						icon='comment'
					/>
					{commentCount}
				</div>
				<div className={classes.waveButtons}>
					<WaveDialog
						waveId={waveId}
						userHandle={userHandle}
						openDialog={this.props.openDialog}
						commentBox={this.state.commentBox}
						icon='expand'
					/>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	user: state.user
});

const mapActionsToProps = {
	upvoteWave,
	unupvoteWave
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(WaveButtons));
