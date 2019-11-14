import React, { Component } from 'react';
import axios from 'axios';

// MUI
import Grid from '@material-ui/core/Grid';

// Components
import Wave from '../components/Wave/Wave';
import StaticProfile from '../components/Profile/StaticProfile';
import WaveSkeleton from '../util/WaveSkeleton';
import ProfileSkeleton from '../util/ProfileSkeleton';

// Redux
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/actions/dataActions';

const baseUrl = "https://us-central1-vibe-32481.cloudfunctions.net/api";

export class user extends Component {
	state = {
		profile: null,
		waveIdParam: null
	};
	componentDidMount() {
		const handle = this.props.match.params.handle;
		const waveId = this.props.match.params.waveId;

		if (waveId) this.setState({ waveIdParam: waveId });
		this.props.getUserProfile(handle);
		axios
			.get(`${baseUrl}/user/${handle}`)
			.then((res) => {
				this.setState({ profile: res.data.user });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		const { waves, loading } = this.props.data;
		const { waveIdParam } = this.state;

		const wavesMarkup = loading ? (
			<WaveSkeleton />
		) : waves === null ? (
			<p>No waves found</p>
		) : !waveIdParam ? (
			waves.map((wave) => <Wave key={wave.waveId} wave={wave} />)
		) : (
						waves.map((wave) => {
							if (wave.waveId !== waveIdParam) {
								return <Wave key={wave.waveId} wave={wave} />;
							} else {
								return <Wave key={wave.waveId} wave={wave} openDialog />;
							}
						})
					);
		return (
			<div className='container'>
				<Grid container spacing={5}>
					<Grid item sm={3} xs={12}>
						{this.state.profile ? (
							<StaticProfile profile={this.state.profile} />
						) : (
								<ProfileSkeleton />
							)}
					</Grid>
					<Grid item sm={6} xs={12}>
						{wavesMarkup}
					</Grid>
				</Grid>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	data: state.data
});

export default connect(
	mapStateToProps,
	{ getUserProfile }
)(user);
