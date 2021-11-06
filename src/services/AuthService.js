export const login = async loginData => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
