import { render, screen } from '@testing-library/react';
import Features from '@/components/Features';

describe('Features Component', () => {
  it('renders the section title', () => {
    render(<Features />);
    expect(screen.getByText('Engineering the')).toBeInTheDocument();
    expect(screen.getByText('Impossible')).toBeInTheDocument();
  });

  it('renders the section overline', () => {
    render(<Features />);
    expect(screen.getByText('CORE TECHNOLOGY')).toBeInTheDocument();
  });

  it('renders all six features', () => {
    render(<Features />);
    expect(screen.getByText('Zero Inertia')).toBeInTheDocument();
    expect(screen.getByText('Nuclear Diamond Cell')).toBeInTheDocument();
    expect(screen.getByText('Auto-Descent')).toBeInTheDocument();
    expect(screen.getByText('Neural Engine')).toBeInTheDocument();
    expect(screen.getByText('Zero Emission')).toBeInTheDocument();
    expect(screen.getByText('Compact Form')).toBeInTheDocument();
  });

  it('renders feature labels', () => {
    render(<Features />);
    expect(screen.getByText('INERTIA_NULLIFICATION')).toBeInTheDocument();
    expect(screen.getByText('POWER_SYSTEM')).toBeInTheDocument();
    expect(screen.getByText('SAFETY_PROTOCOL')).toBeInTheDocument();
    expect(screen.getByText('COMPUTE_CORE')).toBeInTheDocument();
    expect(screen.getByText('ENV_IMPACT')).toBeInTheDocument();
    expect(screen.getByText('CHASSIS_SPEC')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<Features />);
    expect(screen.getByText(/250kg with fingertip precision/)).toBeInTheDocument();
    expect(screen.getByText(/50-year betavoltaic power cell/)).toBeInTheDocument();
  });

  it('renders feature icons', () => {
    render(<Features />);
    const icons = document.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(6);
  });
});
