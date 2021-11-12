import { Registration } from './RegisterService';

const mockedRegister = jest.fn();
global.console.log = mockedRegister;
const mockederror = new Error('Error');
const result = {
  token: 'token',
};

describe('Registration service', () => {
  it('should return token when the response is Ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(result),
      })
    );

    const response = await Registration({});

    expect(response).toStrictEqual(result);
  });
  it('should return error when failed', async () => {
    global.fetch = jest.fn(() => Promise.reject(mockederror));

    const response = await Registration({});
    expect(response).toBe(undefined);
    expect(mockedRegister).toBeCalledTimes(1);
    expect(mockedRegister).toBeCalledWith(mockederror);
  });
});
