import {
	SET_WAVES,
	SET_WAVE,
	UPVOTE_WAVE,
	UNUPVOTE_WAVE,
	LOADING_DATA,
	DELETE_WAVE,
	POST_WAVE,
	POST_COMMENT
} from '../types';

const initialState = {
	waves: [],
	wave: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_DATA:
			return {
				...state,
				loading: true
			};
		case SET_WAVES:
			return {
				...state,
				waves: action.payload,
				loading: false
			};
		case SET_WAVE:
			return {
				...state,
				wave: action.payload
			};
		case UPVOTE_WAVE:
		case UNUPVOTE_WAVE:
			let index = state.waves.findIndex(
				(wave) => wave.waveId === action.payload.waveId
			);
			state.waves[index] = action.payload;
			if (state.wave.waveId === action.payload.waveId) {
				state.wave = action.payload;
			}
			return {
				...state
			};
		case DELETE_WAVE:
			return {
				...state,
				waves: state.waves.filter((wave) => wave.waveId !== action.payload)
			};
		case POST_WAVE:
			return {
				...state,
				waves: [action.payload, ...state.waves]
			};
		case POST_COMMENT:
			return {
				...state,
				wave: {
					...state.wave,
					comments: [action.payload, ...state.wave.comments]
				}
			};
		default:
			return state;
	}
}
