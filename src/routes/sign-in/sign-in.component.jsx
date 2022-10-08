import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import  SignUpForm  from '../../components/sign-up-form/sign-up-form.jsx';

const SignIn = () => {
    useEffect(() => {
        async function signIn () {
            const response = await getRedirectResult(auth);
            console.log(response);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        signIn();
    }, [])
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup </button>
            <button onClick={signInWithGoogleRedirect}> Sign in with Google Redirect </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;