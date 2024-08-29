export const login = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });