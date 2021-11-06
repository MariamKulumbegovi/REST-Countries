import { render } from 'react-dom';
import { login } from './AuthService';

const mockedlog = jest.fn();
global.console.log = mockedlog;
const mockederror = new Error('Error');
const result = {
  token: 'token',
};

describe('login service', () => {
  it('should return token when the response is Ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(result),
      })
    );

    const response = await login({});

    expect(response).toStrictEqual(result);
  });
  it('should return error when failed', async () => {
    global.fetch = jest.fn(() => Promise.reject(mockederror));

    const response = await login({});
    expect(response).toBe(undefined);
    expect(mockedlog).toBeCalledTimes(1);
    expect(mockedlog).toBeCalledWith(mockederror);
  });
});
