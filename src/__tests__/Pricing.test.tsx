import { render, screen } from '@testing-library/react';
import Pricing from '@/components/Pricing';

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Pricing Component', () => {
  it('renders the pricing section title', () => {
    render(<Pricing />);
    expect(screen.getByText('Choose Your')).toBeInTheDocument();
    expect(screen.getByText('Module')).toBeInTheDocument();
  });

  it('renders both pricing plans', () => {
    render(<Pricing />);
    expect(screen.getByText('Standard Unit')).toBeInTheDocument();
    expect(screen.getByText('Industrial Unit')).toBeInTheDocument();
  });

  it('displays correct prices', () => {
    render(<Pricing />);
    expect(screen.getByText('49,999')).toBeInTheDocument();
    expect(screen.getByText('149,999')).toBeInTheDocument();
  });

  it('shows MOST POPULAR badge on featured plan', () => {
    render(<Pricing />);
    expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
  });

  it('renders CTA buttons for both plans', () => {
    render(<Pricing />);
    expect(screen.getByText('Reserve Standard')).toBeInTheDocument();
    expect(screen.getByText('Reserve Pro Unit')).toBeInTheDocument();
  });

  it('displays deposit information', () => {
    render(<Pricing />);
    expect(screen.getByText('$5,000 refundable deposit')).toBeInTheDocument();
    expect(screen.getByText('$15,000 refundable deposit')).toBeInTheDocument();
  });

  it('shows feature lists for each plan', () => {
    render(<Pricing />);
    expect(screen.getAllByText('250kg lift capacity').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('1,000kg lift capacity').length).toBeGreaterThanOrEqual(1);
  });

  it('includes enterprise contact information', () => {
    render(<Pricing />);
    expect(screen.getByText('Enterprise & Government inquiries:')).toBeInTheDocument();
    expect(screen.getByText('enterprise@levitas.tech')).toBeInTheDocument();
  });
});
