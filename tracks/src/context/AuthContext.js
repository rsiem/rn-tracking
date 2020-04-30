import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup':
            return { ...state, token: action.payload };
        case 'signin':

        case 'signout':

        case 'add_error':
            return { errorMessage: '', errorMessage: action.payload }
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        // make api request to sign up with that email and password

        // if we sign up, modify our state, and say that we are authenticated

        // if signing up fails, we probably need to reflect an error message
        // somewhere
        try {
            const response = await trackerApi.post('/signup', { email, password });

            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });

            // navigate to main flow
            navigate('TrackList');
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        //Try to signin
        // Handle succcess by updating state
        // Handle failure by showing error message
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out!!!
    };
};

export const { Context, Provider } = createDataContext(
    authReducer, 
    { signin, signout, signup }, 
    { token: null, errorMessage: '' }
);