import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// 1st way
// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

// 2nd way, refactored
// get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// set loading true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
