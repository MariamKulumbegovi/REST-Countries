import axios from 'axios';

export const getUserList = async () => {
  try {
    const result = await axios.get('/users');
    return result.data.data;
  } catch (error) {
    console.log(error, 'getUserList');
  }
};
