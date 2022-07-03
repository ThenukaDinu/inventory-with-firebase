import { sendPasswordReset, auth } from '../../firebase';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import './Reset.css';

function Reset() {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, error, navigate]);
  return (
    <div className='reset'>
      <div className='reset__container'>
        <input
          type='text'
          className='reset__textBox'
          placeholder='E-mail Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='reset__btn' onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to='/register'>Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
