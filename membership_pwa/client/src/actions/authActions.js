import api from '../utils/api'

// // ! below is direct api call using way
// export const login = (email, password) => api.post('/auth/login', {email,password});
// export const register = (name, email, password, phoneNumber) => api.post('/auth/register', {name, email, password, phoneNumber});
// export const getProfile = () => api.get('/profile');
// export const getBenefits = () => api.get('/benefits');
// export const getHomeData = () => api.get('/home');
// export const getEvents = () => api.get('/events');

export const login = (credentials) => async (dispatch) =>{
    try {
      dispatch({type:'LOGIN_REQUEST'});
      const response = await api.post('/auth/login', credentials);
      dispatch({
        type:'LOGIN_SUCCESS',
        payload: response.data
      });
      localStorage.setItem('token',response.data.token);
      return {success: true};
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: error.response?.data?.msg || 'Login failed'
      });
      
      return { success: false, message: error.response?.data?.msg||'Login failed'};
    }
  };
  
  export const logout = () => ({
    type: 'LOGOUT',
  });