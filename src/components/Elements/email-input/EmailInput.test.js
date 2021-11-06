import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TEST_IDS } from '../../../constants/TestIds';
import { EmailInput } from './EmailInput';

describe('EmailInput', () => {
  it('should render error state', () => {
    const Component = render(<EmailInput />);
    const inputElement = Component.findByTestId(
      TEST_IDS.emailinput.inputElement
    );
    userEvent.type(inputElement, 'Error');
    expect(Component.findByTestId(TEST_IDS.emailinput.hasError))
      .toBeInTheDocument;
  });
  it('should render successful state', () => {
    const Component = render(<EmailInput />);
    const inputelement = Component.findByTestId(
      TEST_IDS.emailinput.inputElement
    );
    userEvent.type(inputelement, 'success@email.com');
    expect(Component.findByTestId(TEST_IDS.emailinput.isSuccess))
      .toBeInTheDocument;
  });
});

describe('EmailInput snapshots', () => {
  test('Component snap', () => {
    const Component = render(<EmailInput />);
    expect(Component).toMatchSnapshot();
  });
});
