import { render, screen } from '@testing-library/react'
import BotCard from './BotCard'

describe('BotCard', () => {
  it('renders content', () => {
    render(<BotCard />)
    expect(screen.getByText('BotCard')).toBeInTheDocument()
  })
})
