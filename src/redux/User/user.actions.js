import userTypes from './user.types'
import { auth, handleUserProfile, GoogleProvider} from './../../firebase/utils';

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
});

export const signInUser = ({ email, password }) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        });
    } catch (err) {
        // console.log(err);
    }
}

export const signUpUser = ({ displayName, email, password, repeatPassword }) => async dispatch => {

    if (password !== repeatPassword) {
        const err = ["Passwords don't match."]
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        });
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await handleUserProfile(user, { displayName });

        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        });

    } catch (err) {
        console.log(err);
    }
}

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                })

            })
        
    } catch (error) {
        // console.log(error);
    }
}