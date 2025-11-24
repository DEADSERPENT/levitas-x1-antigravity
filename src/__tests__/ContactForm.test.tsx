import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/ContactForm';

describe('ContactForm Component', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows required field validation', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.click(submitButton);

    // The form should not submit without required fields
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeRequired();
  });

  it('allows typing in input fields', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'john@example.com');
    expect(emailInput).toHaveValue('john@example.com');
  });

  it('has correct subject options', () => {
    render(<ContactForm />);
    const subjectSelect = screen.getByLabelText(/subject/i);

    expect(subjectSelect).toContainHTML('Sales Inquiry');
    expect(subjectSelect).toContainHTML('Technical Support');
    expect(subjectSelect).toContainHTML('Enterprise Solutions');
    expect(subjectSelect).toContainHTML('Partnership');
    expect(subjectSelect).toContainHTML('Press/Media');
    expect(subjectSelect).toContainHTML('Other');
  });

  it('shows loading state on submit', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill in required fields
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Should show transmitting state
    await waitFor(() => {
      expect(screen.getByText(/transmitting/i)).toBeInTheDocument();
    });
  });

  it('shows success message after submission', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill in required fields
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
