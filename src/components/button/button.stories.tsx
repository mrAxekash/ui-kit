import { Meta } from '@storybook/react'
import { Button } from './button.tsx'

const meta = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const Default = {
  args: {
    children: 'Default Button',
  },
}

export const AlertOnClick = {
  args: {
    children: 'Alert',
    onClick: () => alert('Button clicked Alert'),
  },
}
