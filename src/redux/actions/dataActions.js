import {
	SET_WAVES,
	LOADING_DATA,
	UPVOTE_WAVE,
	UNUPVOTE_WAVE,
	DELETE_WAVE,
	POST_WAVE,
	SET_ERRORS,
	CLEAR_ERRORS,
	LOADING_UI,
	SET_WAVE,
	STOP_LOADING_UI,
	POST_COMMENT
} from '../types';
import axios from 'axios';

const baseUrl = "https://us-central1-vibe-32481.cloudfunctions.net/api";
const testUrl = "http://localhost:5000/vibe-32481/us-central1/api";



// Get all waves

export const getWaves = (category) => (dispatch) => {
	dispatch({ type: LOADING_DATA });
	return axios
		.get(`${testUrl}/${category}/waves`)
		.then((res) => {
			dispatch({ type: SET_WAVES, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: SET_WAVES, payload: [] });
		});
};

// Get a wave's details

export const getWave = (waveId) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	return axios
		.get(`${baseUrl}/wave/${waveId}`)
		.then((res) => {
			dispatch({ type: SET_WAVE, payload: res.data });
			dispatch({ type: STOP_LOADING_UI });
		})
		.catch((err) => console.log(err));
};

// Post a wave

export const postWave = (newWave) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	return axios
		.post(`${baseUrl}/wave`, newWave)
		.then((res) => {
			dispatch({ type: POST_WAVE, payload: res.data.resWave });
			dispatch(clearErrors());
		})
		.catch((err) => {
			dispatch({ type: SET_ERRORS, payload: err.response.data });
		});
};

// Favorite wave

export const upvoteWave = (waveId) => (dispatch) => {
	return axios
		.get(`${baseUrl}/wave/${waveId}/upvote`)
		.then((res) => {
			dispatch({ type: UPVOTE_WAVE, payload: res.data });
		})
		.catch((err) => console.log(err));
};

// Unfavorite wave

export const unupvoteWave = (waveId) => (dispatch) => {
	return axios
		.get(`${baseUrl}/wave/${waveId}/unupvote`)
		.then((res) => {
			dispatch({ type: UNUPVOTE_WAVE, payload: res.data });
		})
		.catch((err) => console.log(err));
};

// Delete a wave

export const deleteWave = (waveId) => (dispatch) => {
	return axios
		.delete(`${baseUrl}/wave/${waveId}`)
		.then(() => {
			dispatch({ type: DELETE_WAVE, payload: waveId });
		})
		.catch((err) => console.log(err));
};

// Post a comment
export const postComment = (waveId, commentData) => (dispatch) => {
	return axios
		.post(`${baseUrl}/wave/${waveId}/comment`, commentData)
		.then((res) => {
			dispatch({ type: POST_COMMENT, payload: res.data });
			dispatch(clearErrors());
		})
		.catch((err) => {
			dispatch({ type: SET_ERRORS, payload: err.response.data });
		});
};

// Get user profile

export const getUserProfile = (userHandle) => (dispatch) => {
	dispatch({ type: LOADING_DATA });
	return axios
		.get(`${baseUrl}/user/${userHandle}`)
		.then((res) => {
			dispatch({ type: SET_WAVES, payload: res.data.waves });
		})
		.catch((err) => {
			dispatch({ type: SET_WAVES, payload: null });
			console.log(err);
		});
};

// Clear errors
export const clearErrors = () => (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
