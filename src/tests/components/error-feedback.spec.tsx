import { screen, render } from '@testing-library/react'
import { ErrorFeedback } from '@/components/error-feedback'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  })),
  usePathname: jest.fn()
}))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customGlobal = global as any
describe('<ErrorFeedback/> on screens >= md', () => {
  it('should render a component correctly medium', () => {
    render(<ErrorFeedback term='sarah' />)
    expect(
      screen.getByAltText(
        'ilustração contendo bonequinhos sendo sugados para um disco voador com detalhes verde claro'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /verifique se a escrita está correta ou tente novamente/i
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/sarah/i)).toBeInTheDocument()
  })
})

describe('<ErrorFeedback/> on small screens', () => {
  it('should render template form mobile screens correctly', () => {
    customGlobal.innerWidth = 540
    render(<ErrorFeedback term='sarah' />)
    expect(screen.getByRole('textbox', { name: /buscar/i })).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByTestId('searched-name')).toBeInTheDocument()
  })
  it('should not render searched name', () => {
    customGlobal.innerWidth = 540
    render(<ErrorFeedback term='' />)
    expect(screen.queryByTestId('searched-name')).not.toBeInTheDocument()
  })
})
