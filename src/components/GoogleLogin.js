import React from 'react';
import { auth, provider, signInWithPopup } from '../firebaseConfig';

function GoogleLogin() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
      // Simpan informasi user ke database atau state management jika perlu
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <button onClick={handleLogin}>Login with Google</button>
  );
}

export default GoogleLogin;