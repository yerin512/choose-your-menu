import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App/>', () => {
  render(<App />)
  it('처음 화면이 보임', () => {
    expect(screen.getByText(/메뉴 고르기/)).toBeInTheDocument()
  })
})
