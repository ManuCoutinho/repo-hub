export type UserData = {
  user: {
    avatar_url: string
    bio: string
    name: string
    login: string
  }
  repos: {
    id: number
    name: string
    full_name: string
    description: string | null
    updated_at: Date
    created_at: Date
    language: string | null
    stargazers_count: number
  }[]
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
