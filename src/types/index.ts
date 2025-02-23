export type Repository = {
  id: number
  name: string
  full_name: string
  description: string | null
  updated_at: string
  created_at: string
  language: string | null
  stargazers_count: number
  favorite: boolean
}
export type User = {
  avatar_url: string
  bio: string
  name: string
  login: string
}

export type UserData = {
  user: User
  repos: Repository[]
}

export type UserContextType = {
  value: string
  setValue(arg: string): void
  data: UserData | null
  error: boolean
  fetchData: () => Promise<void>
}
