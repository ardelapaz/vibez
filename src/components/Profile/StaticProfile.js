import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';

// MUI
import { Paper, Typography, Avatar } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';

// Icons
import { LocationOn, CalendarToday } from '@material-ui/icons';

const styles = (theme) => ({
	...theme.spread
});
const StaticProfile = (props) => {
	const {
		classes,
		profile: {
			handle,
			createdAt,
			imageUrl,
			bio,
			soundcloud,
			location,
			firstName,
			lastName
		}
	} = props;

	return (
		<Paper className={classes.paper}>
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
					<div className={classes.profileDetailsItem}>
						{location && (
							<Fragment>
								<LocationOn color='secondary' />
								<span>{location}</span>
								<hr className={classes.invisibleSeparator} />
							</Fragment>
						)}
					</div>
					{soundcloud && (
						<Fragment>
							<a href={soundcloud} target='_blank' rel='noopener noreferer'>
								{' '}
								{soundcloud}
							</a>
							<hr className={classes.invisibleSeparator} />
						</Fragment>
					)}
					<div className={classes.profileDetailsItem}>
						<CalendarToday className={classes.calendar} /> Joined{' '}
						{dayjs(createdAt).format('MMM YYYY')}
					</div>
					<hr className={classes.invisibleSeparator} />
				</div>
			</div>
		</Paper>
	);
};

export default withStyles(styles)(StaticProfile);
