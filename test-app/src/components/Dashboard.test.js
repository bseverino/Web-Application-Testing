import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('dashboard', () => {
    it('renders without crashing', () => {
        rtl.render(<Dashboard />)
    });
})