import { screen, render } from '@testing-library/react'
import { Search } from '@/components/search'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  })),
  usePathname: jest.fn()
}))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customGlobal = global as any
describe('<Search/> on screens >= md', () => {
  it('should render a component correctly medium', () => {
    render(<Search />)
    expect(
      screen.getByAltText(
        'ilustração contendo uma mulher segurando uma lupa em busca de pessoas'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/procure pelo nome ou nome de usuário/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Encontre os repositórios de algum usuário digitando no campo acima'
      )
    ).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
})

describe('<ErrorFeedback/> on small screens', () => {
  it('should render template form mobile screens correctly', () => {
    customGlobal.innerWidth = 540
    render(<Search />)
    expect(screen.getByRole('textbox', { name: /buscar/i })).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
