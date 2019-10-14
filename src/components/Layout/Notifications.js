import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI
import {
	Menu,
	MenuItem,
	IconButton,
	Typography,
	Badge
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';

// Redux
import { connect } from 'react-redux';
import { markNotificationsRead } from '../../redux/actions/userActions';

const styles = (theme) => ({
	...theme.spread
});

class Notifications extends Component {
	state = {
		anchorEl: null
	};
	handleOpen = (event) => {
		this.setState({ anchorEl: event.target });
	};
	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	onMenuOpened = () => {
		let unreadNotificationsIds = this.props.notifications
			? this.props.notifications
					.filter((notification) => !notification.read)
					.map((notification) => notification.notificationId)
			: null;
		this.props.markNotificationsRead(unreadNotificationsIds);
	};
	render() {
		const { classes } = this.props;
		const notifications = this.props.notifications;
		const anchorEl = this.state.anchorEl;
		const notifNumber = notifications.filter(
			(notification) => notification.read === false
		).length;
		dayjs.extend(relativeTime);

		let notificationsIcon;
		if (notifications && notifications.length > 0) {
			notifications.filter((notification) => notification.read === false)
				.length > 0
				? (notificationsIcon = (
						<IconButton onClick={this.handleOpen}>
							<Badge color='secondary' badgeContent={notifNumber}>
								<NotificationsIcon color='secondary' />
							</Badge>
						</IconButton>
				  ))
				: (notificationsIcon = (
						<IconButton onClick={this.handleOpen}>
							<NotificationsIcon color='secondary' />
						</IconButton>
				  ));
		} else {
			notificationsIcon = (
				<IconButton onClick={this.handleOpen}>
					<NotificationsIcon color='secondary' />
				</IconButton>
			);
		}

		let notificationsMarkup =
			notifications && notifications.length > 0 ? (
				notifications.map((notification) => {
					const verb =
						notification.type === 'upvote' ? 'liked' : 'commented on';
					const time = dayjs(notification.createdAt).fromNow();
					const iconColor = notification.read ? 'primary' : 'secondary';
					const icon =
						notification.type === 'upvote' ? (
							<FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
						) : (
							<ChatIcon color={iconColor} style={{ marginRight: 10 }} />
						);
					return (
						<MenuItem key={notification.createdAt} onClick={this.handleClose}>
							{icon}
							<Typography
								component={Link}
								color='textPrimary'
								variant='body1'
								to={`/users/${notification.recipient}/wave/${notification.waveId}`}
							>
								{notification.sender} {verb} your wave {time}
							</Typography>
						</MenuItem>
					);
				})
			) : (
				<MenuItem onClick={this.handleClose}>
					You have no notifications
				</MenuItem>
			);
		return (
			<Fragment>
				{notificationsIcon}
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
					onEntered={this.onMenuOpened}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
					className={classes.menu}
				>
					{notificationsMarkup}
				</Menu>
			</Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	notifications: state.user.notifications
});

export default connect(
	mapStateToProps,
	{ markNotificationsRead }
)(withStyles(styles)(Notifications));
