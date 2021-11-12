import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmPassword } from './ConfirmPassword';
import { TEST_IDS } from '../../../constants/TestIds';

describe('ConfirmPasswordInput', () => {
  it('should render error state', () => {
    const Component = render(<ConfirmPassword />);
    const confirmpass = Component.findByTestId(
      TEST_IDS.confirmPassInput.confirmpass
    );
    userEvent.type(confirmpass, 'error');
    expect(Component.findByTestId(TEST_IDS.confirmPassInput.error))
      .toBeInTheDocument;
  });
  it('should render success state', () => {
    const Component = render(<ConfirmPassword />);
    const confirmpass = Component.getByTestId(
      TEST_IDS.confirmPassInput.confirmpass
    );
    userEvent.type(confirmpass, 'success');
    expect(Component.findByTestId(TEST_IDS.confirmPassInput.success))
      .toBeInTheDocument;
  });
});

describe('Component snap', () => {
  const Component = render(<ConfirmPassword />);
  expect(Component).toMatchSnapshot();
});
