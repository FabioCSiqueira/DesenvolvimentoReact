import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('deve exibir o valor inicial do contador como 0', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Contador: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('deve incrementar o valor do contador quando o botão de incrementar é clicado', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Incrementar/i);
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Contador: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('deve decrementar o valor do contador quando o botão de decrementar é clicado', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrementar/i);
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Contador: -1/i);
    expect(countElement).toBeInTheDocument();
  });
});
