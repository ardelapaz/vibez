import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Components
import ShowUser from '../components/Profile/ShowUser';
import Wave from '../components/Wave/Wave';
import PostWave from '../components/Wave/PostWave';
import WaveSkeleton from '../util/WaveSkeleton';

// Redux
import { connect } from 'react-redux';
import { getWaves } from '../redux/actions/dataActions';

class home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.user.credentials !== this.props.user.credentials) {
			var genres = this.props.user.credentials.followedGenres;
			if (genres) {
				genres.map(genre => {
					this.props.getWaves(genre);
				});
			}
		}
	}
	render() {
		const { waves, loading } = this.props.data;
		const { authenticated } = this.props.user;
		let recentWavesMarkup = !loading ? (
			waves.map((wave) => <Wave key={wave.waveId} wave={wave} />)
		) : (
				<WaveSkeleton />
			);
		return (
			<div className='container'>
				<Grid container spacing={5}>
					<Grid item sm={3} xs={12}>
						<ShowUser />
					</Grid>
					<Grid item sm={6} xs={12} minwidth='sm'>
						{authenticated && <PostWave />}
						{recentWavesMarkup}
					</Grid>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	data: state.data
});
export default connect(
	mapStateToProps,
	{ getWaves }
)(home);
