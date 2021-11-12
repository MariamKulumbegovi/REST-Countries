export const Registration = async registerData => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
