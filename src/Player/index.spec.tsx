import React from 'react';
import Player from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Player />', () => {
    it('should check render with snapshot', () => {
        const component = render(
            <Player
                url="some-url"
                splashart="some-splashart"
                width="256px"
                height="256px"
            />,
        );

        expect(component).toMatchSnapshot();
    });
});