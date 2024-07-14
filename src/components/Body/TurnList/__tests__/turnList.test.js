import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../../App';
import { act } from 'react';

describe('Tests for the TurnList component', () => {
    test(' Verify the accordion title includes the correct turn number, player name, player symbol, and selected tile.', async () => {
        render(<App/>)
        
        const accordionElementBefore = screen.queryByTestId('1');
        expect(accordionElementBefore).not.toBeInTheDocument();
        const tileElement = screen.getByTestId('11'); 

        await act(async () => {
            userEvent.click(tileElement);
        });
        
        const accordionElementAfter = screen.queryByTestId('1');
        expect(accordionElementAfter).toBeInTheDocument();
    });
});