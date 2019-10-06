// Test away
// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { fireEvent } from 'react-testing-library';
afterEach(rtl.cleanup);

describe('Dashboard', () => {
    it('renders correctly', () => {
        const wrapper = rtl.render(<Dashboard />);
        expect(wrapper.baseElement).toMatchSnapshot();
    });
    it('defaults to open and unlocked', () => {
        const { getByText } = rtl.render(<Dashboard />);
        getByText(/Open/);
        getByText(/Unlocked/);
    });
    it('cannot be open/closed when locked', () => {
        const { getByText } = rtl.render(<Dashboard />);
        const lockButton = getByText(/Lock Gate/);
        const closeButton = getByText(/Close Gate/);
        fireEvent.click(closeButton);
        fireEvent.click(lockButton);
        expect(closeButton.disabled).toBe(true);
    });
    it('shows the controls and display', () => {
        const {getByText} = rtl.render(<Dashboard />);
        getByText(/Open/);
        getByText(/Unlocked/);
        getByText(/Lock Gate/);
        getByText(/Close Gate/);
    });
})

