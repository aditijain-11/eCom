export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
// if product doesnt exist send error from backend else return general error message
