import { screen, render } from '@testing-library/react'
import { ErrorFeedback } from '@/components/error-feedback'
describe('<ErrorFeedback/>', () => {
  it('should render a component correctly', () => {
    render(<ErrorFeedback term='sarah' />)
    expect(
      screen.getByAltText(
        'ilustração contendo bonequinhos sendo sugados para um disco voador com detalhes verde claro'
      )
    ).toBeInTheDocument()
  })
})
