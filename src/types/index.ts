export type Repository = {
  id: number
  name: string
  full_name: string
  description: string | null
  updated_at: Date
  created_at: Date
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
  setError(arg: boolean): void
  setData(data: UserData): void
  clear(): void
  value: string
  setValue(arg: string): void
  data: UserData | null
  error: boolean
}
