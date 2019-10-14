import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';

// Redux
import { connect } from 'react-redux';
import { upvoteWave, unupvoteWave } from '../../redux/actions/dataActions';

// Icons
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const styles = (theme) => ({
	...theme.spread
});

export class FavoriteButton extends Component {
	upvotedWave = () => {
		if (
			this.props.user.upvotes &&
			this.props.user.upvotes.find(
				(upvote) => upvote.waveId === this.props.waveId
			)
		)
			return true;
		else return false;
	};
	upvoteWave = () => {
		this.props.upvoteWave(this.props.waveId);
	};
	unupvoteWave = () => {
		this.props.unupvoteWave(this.props.waveId);
	};

	render() {
		const {
			classes,
			user: { authenticated }
		} = this.props;
		const upvoteButton = !authenticated ? (
			<Link to='/login'>
				<FavoriteBorder className={classes.favoriteButton}></FavoriteBorder>
			</Link>
		) : this.upvotedWave() ? (
			<Fragment>
				<IconButton
					onClick={this.unupvoteWave}
					className={classes.favoriteButton}
				>
					<Favorite className={classes.favoriteButtonIcon} />
				</IconButton>
			</Fragment>
		) : (
			<Fragment>
				<IconButton
					onClick={this.upvoteWave}
					className={classes.favoriteButton}
				>
					<FavoriteBorder />
				</IconButton>
			</Fragment>
		);
		return <Fragment>{upvoteButton}</Fragment>;
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
)(withStyles(styles)(FavoriteButton));
