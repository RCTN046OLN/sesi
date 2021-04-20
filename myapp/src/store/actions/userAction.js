

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    dispatch({
      type: "SET_USERS",
      payload: data,
    });
  };
};
