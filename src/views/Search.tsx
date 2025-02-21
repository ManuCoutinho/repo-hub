import { Search } from '@/components/search'
import { ErrorFeedback } from '@/components/error-feedback'
import { useUserContext } from '@/hooks/useUserContext'

export function SearchView() {
  const { error, value: termSearched } = useUserContext()
  if (termSearched && error) {
    return <ErrorFeedback term={termSearched} />
  }
  return <Search />
}
