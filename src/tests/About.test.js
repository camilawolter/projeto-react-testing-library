import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testando o componente About', () => {
  test('Testando se possuem um heading', () => {
    renderWithRouter(<About />);

    const headingAbout = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(headingAbout).toBeInTheDocument();
  });
  test('Testando se a página tem dois parágrafos', () => {
    renderWithRouter(<About />);

    const paragraUm = screen.getByText(/This application simulates a Pokédex/i);
    expect(paragraUm).toBeInTheDocument();

    const paragraDois = screen.getByText(/One can filter Pokémons by type/i);
    expect(paragraDois).toBeInTheDocument();
  });
  test('Testando se possui uma imagem', () => {
    renderWithRouter(<About />);

    const imgPokedex = screen.getByRole('img', { name: 'Pokédex' });
    expect(imgPokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
