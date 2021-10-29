import axios from 'axios';

export const getMainUser = async () => {
  try {
    const result = await axios.get('/users/2');
    return result.data.data;
  } catch (error) {
    console.log(error, 'getMainUser');
  }
};
