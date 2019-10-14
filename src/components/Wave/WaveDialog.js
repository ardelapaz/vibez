import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import {
	Dialog,
	DialogContent,
	CircularProgress,
	Typography,
	Avatar,
	Grid,
	IconButton
} from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { getWave, clearErrors } from '../../redux/actions/dataActions';

// Components
import TipIconButton from '../../util/TipIconButton';
import FavoriteButton from './FavoriteButton';
import Comments from './Comments';
import FormattedDate from '../../util/FormattedDate';
import CommentForm from './CommentForm';

// Icons
import { UnfoldMore, Chat } from '@material-ui/icons';

const styles = (theme) => ({
	...theme.spread
});

class WaveDialog extends Component {
	state = {
		open: false,
		oldPath: '',
		newPath: '',
		commentBox: false
	};
	componentDidMount() {
		if (this.props.openDialog) {
			this.handleOpen();
		}
		if (this.props.commentBox) {
			this.setState({ commentBox: true });
			this.handleOpen();
		}
	}

	handleOpen = (type) => {
		if (type === 'comment') {
			this.setState({ commentBox: true });
		}
		let oldPath = window.location.pathname;
		const { userHandle, waveId } = this.props;
		const newPath = `/users/${userHandle}/wave/${waveId}`;

		if (oldPath === newPath) oldPath = `/users/${userHandle}`;

		window.history.pushState(null, null, newPath);

		this.setState({ open: true, oldPath, newPath });
		this.props.getWave(this.props.waveId);
	};
	handleClose = () => {
		window.history.pushState(null, null, this.state.oldPath);
		this.setState({ open: false, commentBox: false });
		this.props.clearErrors();
	};
	handleCommentClick = () => {
		this.setState({ commentBox: true });
	};
	render() {
		const {
			classes,
			user: { authenticated },
			wave: {
				waveId,
				body,
				createdAt,
				upvoteCount,
				commentCount,
				userImage,
				userHandle,
				comments,
				userName
			},
			UI: { loading },
			icon
		} = this.props;
		const iconButton =
			this.props.icon === 'comment' ? (
				authenticated ? (
					<IconButton
						onClick={() => this.handleOpen('comment')}
						tip='Comment'
						className={classes.commentButton}
					>
						<Chat>Comments</Chat>
					</IconButton>
				) : (
					<IconButton
						component={Link}
						to='/login'
						className={classes.commentButton}
					>
						<Chat>Comments</Chat>
					</IconButton>
				)
			) : (
				<TipIconButton
					onClick={this.handleOpen}
					tip='Expand wave'
					tipClassName={classes.expandButton}
				>
					<UnfoldMore />
				</TipIconButton>
			);

		const commentButton = !authenticated ? (
			<IconButton
				component={Link}
				to='/login'
				className={classes.commentButton}
			>
				<Chat />
			</IconButton>
		) : (
			<Fragment>
				<IconButton
					onClick={this.handleCommentClick}
					className={classes.expandButton}
				>
					<Chat className={classes.commentButton} />
				</IconButton>
			</Fragment>
		);

		const dialogMarkup = loading ? (
			<CircularProgress className={classes.progress} size={100} />
		) : (
			<Grid container spacing={2}>
				<Grid item sm={3}>
					<Avatar
						alt=''
						src={userImage ? userImage : <CircularProgress size={30} />}
						className={classes.cardAvatar}
					/>
				</Grid>
				<Grid item sm={9}>
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
					<hr className={classes.invisibleSeparator} />
					<Typography variant='body1' className={classes.cardBody}>
						{body}
					</Typography>
					<hr className={classes.invisibleSeparator} />
					<div className={classes.buttonsContainer}>
						<div className={classes.waveButtons}>
							<FavoriteButton waveId={waveId} />
							{upvoteCount}
						</div>
						<div className={classes.waveButtons}>
							{commentButton} {commentCount}
						</div>
					</div>
				</Grid>
				<hr className={classes.invisibleSeparator} />
				{this.state.commentBox && <CommentForm waveId={waveId} />}
				<Comments comments={comments} />
			</Grid>
		);
		return (
			<Fragment>
				{iconButton}
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					fullWidth
					maxWidth='sm'
				>
					<DialogContent className={classes.expandedWaveContent}>
						{dialogMarkup}
					</DialogContent>
				</Dialog>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	wave: state.data.wave,
	user: state.user,
	UI: state.UI
});

const mapActionsToProps = {
	getWave,
	clearErrors
};
export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(WaveDialog));
