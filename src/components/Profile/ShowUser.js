import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

// Components
import EditDetails from './EditDetails';
import ProfileSkeleton from '../../util/ProfileSkeleton';

// MUI
import {
	Button,
	Typography,
	Paper,
	Avatar,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary
} from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';

// Icons
import {
	LocationOn,
	CalendarToday,
	ExpandMore,
	ExpandLess
} from '@material-ui/icons';

// Redux
import { connect } from 'react-redux';

const styles = (theme) => ({
	...theme.spread
});

class ShowUser extends Component {
	state = {
		expanded: false
	};
	handleLogout = () => {
		this.props.logoutUser();
	};
	expandedButton = () => {
		const expand = this.state.expanded;
		this.setState({ expanded: !expand });
	};
	render() {
		const {
			classes,
			user: {
				credentials: {
					handle,
					createdAt,
					imageUrl,
					bio,
					soundcloud,
					location,
					firstName,
					lastName
				},
				loading,
				authenticated
			}
		} = this.props;

		let expandButton = this.state.expanded ? <ExpandLess /> : <ExpandMore />;

		let profileMarkup = !loading ? (
			authenticated ? (
				<ExpansionPanel onChange={this.expandedButton}>
					<ExpansionPanelSummary>
						<div className={classes.profile}>
							<Avatar
								alt='User image'
								src={imageUrl ? imageUrl : null}
								className={classes.profileAvatar}
							/>
							<div className={classes.profileDetails}>
								<Typography variant='h5'>
									{firstName} {lastName}
								</Typography>
								<MuiLink
									component={Link}
									to={`/users/${handle}`}
									color='textPrimary'
									variant='h6'
								>
									@{handle}
								</MuiLink>
								<hr className={classes.invisibleSeparator} />
								{bio && <Typography variant='body1'>{bio}</Typography>}
								<hr className={classes.invisibleSeparator} />
								{expandButton}
							</div>
						</div>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div className={classes.profile}>
							<div className={classes.profileDetailsItem}>
								{location && (
									<Fragment>
										<LocationOn color='secondary' />
										<span>{location}</span>
										<hr className={classes.invisibleSeparator} />
									</Fragment>
								)}
							</div>
							<div className={classes.profileDetailsItem}>
								{soundcloud && (
									<Fragment>
										<a
											href={soundcloud}
											target='_blank'
											rel='noopener noreferer'
										>
											{' '}
											{soundcloud}
										</a>
										<hr className={classes.invisibleSeparator} />
									</Fragment>
								)}
							</div>
							<div className={classes.profileDetailsItem}>
								<CalendarToday className={classes.calendar} /> Joined{' '}
								{dayjs(createdAt).format('MMM YYYY')}
							</div>
							<hr className={classes.invisibleSeparator} />
							<EditDetails />
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			) : (
					<Paper className={classes.paper}>
						<Typography variant='body2' align='center'>
							No profile found
					</Typography>
						<div className={classes.profileLoginButtons}>
							<Button
								variant='contained'
								color='primary'
								component={Link}
								to='/login'
							>
								Login
						</Button>
							<Button
								variant='contained'
								color='secondary'
								component={Link}
								to='/signup'
							>
								Signup
						</Button>
						</div>
					</Paper>
				)
		) : (
				<ProfileSkeleton />
			);
		return profileMarkup;
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});


export default connect(
	mapStateToProps,
)(withStyles(styles)(ShowUser));
