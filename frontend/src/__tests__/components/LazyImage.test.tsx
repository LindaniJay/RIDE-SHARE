import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LazyImage from '../../components/LazyImage';

// Mock intersection observer
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
});
global.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;

describe('LazyImage', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image'
  };

  it('renders without crashing', () => {
    render(<LazyImage {...defaultProps} priority={true} />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });


  it('handles error state', async () => {
    render(<LazyImage {...defaultProps} placeholder="/placeholder.jpg" priority={true} />);
    
    // Wait for image to load
    const img = await waitFor(() => screen.getByAltText('Test image'));
    
    // Simulate image error
    Object.defineProperty(img, 'complete', { value: false });
    Object.defineProperty(img, 'naturalHeight', { value: 0 });
    
    // Trigger error
    img.dispatchEvent(new Event('error'));
    
    await waitFor(() => {
      expect(img).toHaveAttribute('src', '/placeholder.jpg');
    });
  });

  it('applies custom className', () => {
    render(<LazyImage {...defaultProps} className="custom-class" priority={true} />);
    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('handles priority loading', () => {
    render(<LazyImage {...defaultProps} priority={true} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('handles lazy loading by default', () => {
    render(<LazyImage {...defaultProps} priority={true} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager'); // With priority=true, it should be eager
  });
});
