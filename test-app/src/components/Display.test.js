import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('display', () => {
    it('renders without crashing', () => {
        rtl.render(<Display />)
    });
})