  // src/components/Login.js
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { useNavigate, useSearchParams } from 'react-router-dom';
  import { login } from '../actions/authActions';

  function Login() {
    const [memberID, setMemberID] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading,error} = useSearchParams(state => state.auth);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await dispatch(login({memberID, password}));
      if(result.success){
        setStatusMessage('Login successful. Welcome back!');
        navigate('/home')
        
      }
      else{
        setStatusMessage('Invalid credentials. Please try again.');
      }
      // if (memberID === 'andy' && password === 'password')
      //   // ! 이거 프레젠테이션 하고 나면 백엔드 로직으로 처리해야함
      //   {
      //   dispatch(login({ memberID }));
      //   setStatusMessage('Login successful. Welcome back!');
      //   navigate('/home')
      // } else {
      //   setStatusMessage('Invalid credentials. Please try again.');
      // }
    };

    return (
      <div id="loginForm" className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="memberID">Member ID</label>
            <input
              type="text"
              id="memberID"
              value={memberID}
              onChange={(e) => setMemberID(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Access Your Account</button>
        </form>
        <div className="status-message">{statusMessage}</div>
      </div>
    );
  }

  export default Login;




// ! 아래 서버 버전

//   import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../utils/api';
// import { setUser } from '../redux/slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const response = await login(email, password);
//       localStorage.setItem('token', response.data.token);
//       dispatch(setUser(response.data.user));
//       navigate('/home');
//     } catch (err) {
//       setError(err.response?.data?.msg || 'An error occurred');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;