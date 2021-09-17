import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TwoDArrayDS from './TwoDArrayDS';

describe('<TwoDArrayDS />', () => {
  test('it should mount', () => {
    render(<TwoDArrayDS />);
    
    const twoDArrayDs = screen.getByTestId('TwoDArrayDS');

    expect(twoDArrayDs).toBeInTheDocument();
  });
});