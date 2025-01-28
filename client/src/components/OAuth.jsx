import React from 'react';
import { app } from '../firebase';
import { GoogleAuthProvider,signInWithPopup, getAuth } from 'firebase/auth';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

function OAuth() {
    const dispatch=useDispatch();
    const handleGoogleClick =  async () => {
        try {
            const provider=new GoogleAuthProvider();
            const auth=getAuth(app);
            const result=await signInWithPopup(auth,provider);

            const res=await fetch('/api/auth/google',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: result.user.displayName,
                  email: result.user.email,
                  photo: result.user.photoURL,
                }),
            });
            const data=await res.json();
            console.log("Google Response Data:",data);
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log("Could not continue with Google",error);
        }
    };
  return (
    <button
      className="w-full p-3 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 text-white font-medium rounded-full hover:scale-105 transition-transform shadow-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none" onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
}

export default OAuth;
