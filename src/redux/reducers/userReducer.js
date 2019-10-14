import {
	SET_USER,
	SET_AUTHENTICATED,
	SET_UNAUTHENTICATED,
	LOADING_USER,
	UPVOTE_WAVE,
	UNUPVOTE_WAVE,
	MARK_NOTIFICATIONS_READ
} from '../types';

const initialState = {
	authenticated: false,
	credentials: {},
	upvotes: [],
	notifications: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_AUTHENTICATED:
			return {
				...state,
				authenticated: true
			};
		case SET_UNAUTHENTICATED:
			return initialState;
		case SET_USER:
			return {
				authenticated: true,
				loading: false,
				...action.payload
			};
		case LOADING_USER:
			return {
				...state,
				loading: true
			};
		case UPVOTE_WAVE:
			return {
				...state,
				upvotes: [
					...state.upvotes,
					{
						userHandle: state.credentials.handle,
						waveId: action.payload.waveId
					}
				]
			};
		case UNUPVOTE_WAVE:
			return {
				...state,
				upvotes: state.upvotes.filter(
					(upvote) => upvote.waveId !== action.payload.waveId
				)
			};
		case MARK_NOTIFICATIONS_READ:
			state.notifications.forEach((notification) => (notification.read = true));
			return {
				...state
			};

		default:
			return state;
	}
}
