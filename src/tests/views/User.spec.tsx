import { screen, render, within } from '@testing-library/react'
import { UserView } from '@/views/User'
import type { UserData } from '@/types'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  })),
  usePathname: jest.fn()
}))

const mockData = {
  user: {
    avatar_url: 'https://random-avatar.png',
    bio: 'bio for user',
    name: 'Sarah Connor',
    login: 'skynet-killer'
  },
  repos: [
    {
      id: 123,
      name: 'repo 1',
      full_name: 'skynet-skiller/repo-1',
      description: 'description 1',
      updated_at: '2025-02-23T18:50:17.263Z',
      created_at: '2025-02-23T18:50:17.263Z',
      language: 'C',
      stargazers_count: 23,
      favorite: false
    },
    {
      id: 12345,
      name: 'repo 2',
      full_name: 'skynet-skiller/repo-2',
      description: 'description 2',
      updated_at: '2025-02-23T18:50:17.263Z',
      created_at: '2025-02-23T18:50:17.263Z',
      language: 'Java',
      stargazers_count: 10,
      favorite: true
    },
    {
      id: 123456,
      name: 'repo 3',
      full_name: 'skynet-skiller/repo-3',
      description: 'description 3',
      updated_at: '2025-02-23T18:50:17.263Z',
      created_at: '2025-02-23T18:50:17.263Z',
      language: 'CSS',
      stargazers_count: 4,
      favorite: true
    }
  ]
} as UserData
describe('<UserView />', () => {
  it('should render a completely view for user data', () => {
    render(<UserView {...mockData} />)
    const altAvatar = `github avatar de ${mockData.user.name}`
    const username = `@${mockData.user.login}`
    expect(
      screen.getByRole('heading', { name: /repositórios/i })
    ).toBeInTheDocument()
    expect(screen.getByAltText(altAvatar)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: altAvatar })).toBeInTheDocument()
    expect(screen.getByText(username)).toBeInTheDocument()
    expect(screen.getByText(mockData.user.bio)).toBeInTheDocument()
    // expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
  it('should render a completely view for user repositories data', () => {
    render(<UserView {...mockData} />)
    const repoCards = screen.getAllByTestId('repository-card')
    expect(repoCards.length).toBe(mockData.repos.length)
    repoCards.forEach((card, i) => {
      expect(within(card).getByText(mockData.repos[i].name)).toBeInTheDocument()
      expect(
        within(card).getByText(mockData.repos[i].language as string)
      ).toBeInTheDocument()
      expect(
        within(card).getByRole('button', { name: 'toggle star repo' })
      ).toBeInTheDocument()
      expect(within(card).getByRole('time')).toHaveAttribute(
        'datetime',
        mockData.repos[i].updated_at
      )
    })
  })
})
