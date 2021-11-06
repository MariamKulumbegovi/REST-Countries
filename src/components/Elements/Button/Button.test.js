import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TEST_IDS } from '../../../constants/TestIds';
import { Button } from './Button';

const props = {
  label: 'label',
  className: 'className',
  onclick: jest.fn(),
};

describe('testing button', () => {
  // describe('button event',()=>{
  //     it("should work correctly ",()=>{
  //         const Component=render(<Button {...props}/>)
  //         userEvent.click(Component.getByTestId(TEST_IDS.button))

  //         expect(props.onclick).toBeCalledTimes(1)
  //     })
  // })

  describe('button snapshot', () => {
    it('should render correct props', () => {
      const Component = render(<Button {...props} />);
      expect(Component).toMatchSnapshot();
    });
  });
});
