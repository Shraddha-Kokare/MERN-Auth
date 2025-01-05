import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';

const Signin = () => {
  const [formData, setFormData] = useState({});

  const {loading,error}=useSelector((state)=>state.user);
  // const userState=useSelector((state)=>state.user);
  // console.log("Userstate: ",{loading,error});
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Dispatching signInStart");
      console.log("Form Data:", formData);
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log("API Response Data:", data);
      if (data.success === false) {
        console.log("Dispatching signInFailure");
        dispatch(signInFailure(data.message || 'Failed to sign in'));
      } else {
        console.log("Dispatching signInSuccess");
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(signInFailure(error.message || 'An error occurred'));
    }
  };
  

  // const handleSubmit = async (e) => 
  //   {
  //   e.preventDefault();
  //   try {
  //     dispatch(signInStart());
  //     const res = await fetch('/api/auth/signin', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     // setLoading(false);
  //     if (data.success === false) {
  //       dispatch(signInFailure());
  //       return;
  //     } else {
  //       dispatch(signInSuccess(data));
  //       navigate('/');
  //     }
  //   } catch (error) {
  //     dispatch(signInFailure(error));
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex items-center justify-center">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-gradient">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="w-full p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>Dont have an account?</p>
          <Link to="/signup">
            <span className="text-pink-500 font-semibold hover:underline">Sign Up</span>
          </Link>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-5">
            {error ? error.message || "Something went wrong. Please try again.":""}
          </p>
        )}
      </div>
    </div>
  );
};

export default Signin;
