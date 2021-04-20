const initailState = {
  isLoginSuccess: false,
  isLoginError: null,
  isLoginPending: false,
};

const authRreducer = (state = initailState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN_SUCCESS":
      return { ...state, isLoginSuccess: action.payload };
    case "SET_IS_LOGIN_ERROR":
      return { ...state, isLoginError: action.payload };
    case "SET_IS_LOGIN_PENDING":
      return { ...state, isLoginPending: action.payload };
    default:
      return state;
  }
};

export default authRreducer;
