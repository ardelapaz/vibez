import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI
import {
	Avatar,
	CircularProgress,
	Card,
	CardContent,
	CardActions,
	Typography
} from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';

// Components
import DeleteWave from './DeleteWave';
import WaveButtons from './WaveButtons';
import FormattedDate from '../../util/FormattedDate';

// Redux
import { connect } from 'react-redux';
import { upvoteWave, unupvoteWave } from '../../redux/actions/dataActions';

const styles = (theme) => ({
	...theme.spread
});

class Wave extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			classes,
			wave: { body, createdAt, userImage, userHandle, waveId, userName },
			user: {
				authenticated,
				credentials: { handle }
			}
		} = this.props;

		const deleteButton =
			authenticated && userHandle === handle ? (
				<DeleteWave waveId={waveId} />
			) : null;
		return (
			<Card className={classes.card}>
				<Avatar
					alt=''
					src={userImage ? userImage : <CircularProgress size={30} />}
					className={classes.cardAvatar}
				/>
				<CardContent className={classes.cardContent}>
					<Typography
						variant='h6'
						color='textPrimary'
						fontWeight='fontWeightBold'
					>
						{userName}{' '}
						<MuiLink
							component={Link}
							to={`/users/${userHandle}`}
							color='textPrimary'
							variant='subtitle1'
						>
							@{userHandle}
						</MuiLink>
						<FormattedDate createdAt={createdAt} />
					</Typography>
					<Typography variant='body1' className={classes.cardBody}>
						{body}
					</Typography>
					<CardActions>
						<WaveButtons
							wave={this.props.wave}
							openDialog={this.props.openDialog}
						/>
					</CardActions>
					{deleteButton}
				</CardContent>
			</Card>
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
)(withStyles(styles)(Wave));
