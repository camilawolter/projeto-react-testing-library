import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testanto o componente NotFound.js', () => {
  test('Testando se a página possui um heading', () => {
    renderWithRouter(<NotFound />);

    const msgNotFound = screen.getByRole('heading', { level: 2,
      name: 'Page requested not found Crying emoji' });
    expect(msgNotFound).toBeInTheDocument();
  });
  test('Testamdo se a página renderiza uma imagem', () => {
    renderWithRouter(<NotFound />);

    const imgPikachu = screen.getByRole('img',
      { name: 'Pikachu crying because the page requested was not found' });
    expect(imgPikachu.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
