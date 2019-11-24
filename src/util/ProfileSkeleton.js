import React from 'react';
import NoImg from '../images/no-img.png';

// MUI
import { Paper, Avatar, withStyles } from '@material-ui/core';

const styles = (theme) => ({
	...theme.spread,
	handle: {
		height: 20,
		backgroundColor: theme.palette.primary.main,
		width: 60,
		margin: '0 auto 7px auto'
	}
});

const ProfileSkeleton = (props) => {
	const { classes } = props;
	return (
		<Paper className={classes.paper}>
			<div className={classes.profileDetails}>
				<Avatar alt='User image' src={NoImg} className={classes.profileAvatar} />
				<hr className={classes.invisibleSeparator} />
				<div className={classes.profileDetails}>
					<div className={classes.handle} />
					<div className={classes.handle} />
					<hr className={classes.invisibleSeparator} />
					<div className={classes.fullLine} />
					<div className={classes.fullLine} />
				</div>
			</div>
		</Paper>
	);
};

export default withStyles(styles)(ProfileSkeleton);
