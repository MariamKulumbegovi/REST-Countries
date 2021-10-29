import axios from 'axios';

export const getEmail = async () => {
  try {
    const result = await axios.get('./unknown');
    return result.data.data;
  } catch (error) {
    console.log(error, 'test');
  }
};
