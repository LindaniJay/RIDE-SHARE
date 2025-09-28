import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </HelmetProvider>
  );
};

describe('Home Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Home />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders the page title', () => {
    renderWithRouter(<Home />);
    expect(document.title).toContain('RideShare SA');
  });

  it('renders the video background', () => {
    renderWithRouter(<Home />);
    const video = screen.getAllByRole('generic', { hidden: true })[0];
    expect(video).toBeInTheDocument();
  });
});
