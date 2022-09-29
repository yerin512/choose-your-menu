import { render } from '@testing-library/react'
import { MenuForm } from '.'

describe('MenuForm', () => {
  const renderMenuForm = () => render(<MenuForm />)

  it('renders label', () => {
    const { container } = renderMenuForm()

    expect(container).toHaveTextContent('먹고 싶은 메뉴')
  })
})
