function callLoginAPI(email, password, callback) {
  setTimeout(() => {
    if (email === "admin@gmail.com" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Email atau password salah"));
    }
  }, 3000);
}

function setIsLoginSuccess(payload) {
  return {
    type: "SET_IS_LOGIN_SUCCESS",
    payload: payload,
  };
}

function setIsLoginError(payload) {
  return {
    type: "SET_IS_LOGIN_ERROR",
    payload: payload,
  };
}

function setIsLoginPending(payload) {
  return {
    type: "SET_IS_LOGIN_PENDING",
    payload: payload,
  };
}

export function login(email, password) {
  return (dispacth) => {
    dispacth(setIsLoginError(null));
    dispacth(setIsLoginSuccess(false));
    dispacth(setIsLoginPending(true));

    callLoginAPI(email, password, (error) => {
      if (!error) {
        dispacth(setIsLoginSuccess(true));
        dispacth(setIsLoginPending(false));
      } else {
        dispacth(setIsLoginError(error));
        dispacth(setIsLoginPending(false));
      }
    });
  };
}
