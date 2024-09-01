// src/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: null};
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          // ...state -> keeping all of status
          isAuthenticated: true,
          user: action.payload.user,
          loading: false
        };
        case 'LOGIN_FAIL':
          return{
            ...state,
            isAuthenticated: false,
            user: null,
            loading: false,
            error: action.payload
          }
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  };
  
  export default authReducer;