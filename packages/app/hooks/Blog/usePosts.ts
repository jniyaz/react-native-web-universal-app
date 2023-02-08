import useSWR from 'swr'
import { fetcher } from 'app/lib/fetcher'

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    'https://mockend.com/mockend/demo/posts',
    fetcher
  )

  return {
    posts: data,
    isLoading,
    isError: error,
  }
}
