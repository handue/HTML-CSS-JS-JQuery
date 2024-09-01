const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : `http://localhost:${process.env.REACT_APP_SERVER_PORT || 5000}/api`;

export default API_URL;