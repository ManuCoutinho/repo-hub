import { screen, render } from '@testing-library/react'
import { UserForm } from '@/components/user-form'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  })),
  usePathname: jest.fn()
}))
describe('<UserForm/>', () => {
  it('should render the search user form correctly', () => {
    render(<UserForm />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Buscar usuário')).toBeInTheDocument()
  })
})
