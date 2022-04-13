import React from 'react';
import PlayerContainer from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<PlayerContainer />', () => {
    it('should check render with snapshot', () => {
        const component = render(
            <PlayerContainer
                url="some-url"
                splashart="some-splashart"
                width="256px"
                height="256px"
            />,
        );

        expect(component).toMatchSnapshot();
    });
});