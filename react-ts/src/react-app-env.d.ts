/// <reference types="react-scripts" />
import { Component, ReactElement } from 'react';
import { ReactWrapper, ShallowWrapper } from 'enzyme';

declare global {
    declare function renderWithTheme<P, S>(tree: ReactElement<P>, options?: any): cheerio.Cheerio;
    declare function shallowWithTheme<C extends Component, P = C['props'], S = C['state']>(
        tree: ReactElement<P>
    ): ShallowWrapper<P, S, C>;
    declare function mountWithTheme<C extends Component, P = C['props'], S = C['state']>(
        tree: ReactElement<P>
    ): ReactWrapper<P, S, C>;

    namespace NodeJS {
        interface Global {
            renderWithTheme<P, S>(tree: ReactElement<P>, options?: any): cheerio.Cheerio;
            shallowWithTheme<C extends Component, P = C['props'], S = C['state']>(
                tree: ReactElement<P>
            ): ShallowWrapper<P, S, C>;
            mountWithTheme<C extends Component, P = C['props'], S = C['state']>(
                tree: ReactElement<P>
            ): ReactWrapper<P, S, C>;
        }
    }
}
