import React from 'react';
import App from './App';

describe('App', () => {
    it('should match snapshot', () => {
        const wrapper = renderWithTheme(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
