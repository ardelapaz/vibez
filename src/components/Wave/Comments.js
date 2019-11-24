import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import { CircularProgress, Typography, Avatar, Grid } from '@material-ui/core';

// Components
import FormattedDate from '../../util/FormattedDate';

const styles = (theme) => ({
	...theme.spread
});

class Comments extends Component {
	render() {
		const { classes, comments } = this.props;

		return (
			<Grid container>
				{comments.map((comment, index) => {
					const { body, createdAt, userImage, userHandle } = comment;
					return (
						<Fragment key={createdAt}>
							<Grid item sm={12}>
								<Grid container>
									<hr className={classes.visibleSeparator} />

									<Grid item sm={2}>
										<Avatar
											alt=''
											src={
												userImage ? userImage : <CircularProgress size={30} />
											}
											className={classes.cardAvatar}
										/>
									</Grid>
									<Grid item sm={10}>
										<Typography
											variant='h6'
											component={Link}
											to={`/users/${userHandle}`}
											color='textPrimary'
										>
											@{userHandle}
										</Typography>
										<FormattedDate createdAt={createdAt} />
										<hr className={classes.invisibleSeparator} />
										<Typography variant='body1'>{body}</Typography>
									</Grid>
								</Grid>
							</Grid>
							{index === comments.length && (
								<hr className={classes.visibleSeparator} />
							)}
							{index === comments.length - 1 && (
								<hr className={classes.invisibleSeparator} />
							)}
						</Fragment>
					);
				})}
			</Grid>
		);
	}
}

export default withStyles(styles)(Comments);
