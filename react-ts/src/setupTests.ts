import 'jest-styled-components';
import 'jest-enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enableHooks from 'jest-react-hooks-shallow';
import { configure, mount, ReactWrapper, render, shallow, ShallowWrapper } from 'enzyme';
import { Component, createElement, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

enableHooks(jest);

configure({ adapter: new Adapter() });

const ThemeProviderWrapper = ({ children }) => {
    const theme = {};
    return createElement(ThemeProvider, { theme }, children);
};

function renderWithTheme<P, S>(tree: ReactElement<P>, options?: any): cheerio.Cheerio {
    return render(createElement(ThemeProviderWrapper, { children: tree }, options));
}

function shallowWithTheme<C extends Component, P = C['props'], S = C['state']>(
    tree: ReactElement<P>
): ShallowWrapper<P, S, C> {
    return shallow<C, P, S>(tree, { wrappingComponent: ThemeProviderWrapper });
}

function mountWithTheme<C extends Component, P = C['props'], S = C['state']>(
    tree: ReactElement<P>
): ReactWrapper<P, S, C> {
    return mount<C, P, S>(tree, { wrappingComponent: ThemeProviderWrapper });
}

beforeEach(() => {
    global.renderWithTheme = renderWithTheme;
    global.shallowWithTheme = shallowWithTheme;
    global.mountWithTheme = mountWithTheme;
});
