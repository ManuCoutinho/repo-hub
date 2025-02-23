import { screen, render } from '@testing-library/react'
import { InputSearch } from '@/ui'

describe('<InputSearch />', () => {
  it('should render a input component correctly', () => {
    render(<InputSearch placeholder='test one' aria-label='search' />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'test one')
    expect(input).toHaveAttribute('aria-label', 'search')
  })
  it('should render child components correctly', () => {
    render(<InputSearch placeholder='test one' aria-label='search' id='test' />)
    const icon = screen.getByTestId('icon')
    const label = screen.getByLabelText(/buscar/i)

    expect(icon).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customGlobal = global as any
describe('mobile view', () => {
  customGlobal.innerWidth = 400
  it('should render a small icon in mobile screen', () => {
    render(<InputSearch placeholder='test one' aria-label='search' id='test' />)
    const icon = screen.getByTestId('icon')
    expect(icon.firstChild).toHaveAttribute('width', '16')
  })
})
