import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Application from '@/index';

jest.mock('@/app/localization', () => ({
  Lang: {
    AR: 'ar',
    EN: 'en'
  }
}));

describe('Application', () => {
  it('renders correctly', () => {
    render(<Application />);
    expect(screen.toJSON()).not.toBeNull();
  });
});
