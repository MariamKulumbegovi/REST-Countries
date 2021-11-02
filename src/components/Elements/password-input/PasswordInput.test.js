import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {PasswordInput} from './PasswordInput'
import { TEST_IDS} from '../../../constants/TestIds'

describe('PasswordInput',()=>{
    it('should render error state',()=>{
        const Component=render(<PasswordInput/>)
        const passinput=Component.findByTestId(TEST_IDS.passwordinput.passinput)
        userEvent.type(passinput,'error')
        expect(Component.findByTestId(TEST_IDS.passwordinput.error)).toBeInTheDocument
    })
    it('should render success state',()=>{
        const Component=render(<PasswordInput/>)
        const passinput=Component.getByTestId(TEST_IDS.passwordinput.passinput)
        userEvent.type(passinput,'success')
        expect(Component.findByTestId(TEST_IDS.passwordinput.success)).toBeInTheDocument
    })
})

describe('Component snap',()=>{
    const Component=render(<PasswordInput/>)
    expect(Component).toMatchSnapshot()
})