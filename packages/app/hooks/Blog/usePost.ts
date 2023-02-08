import useSWR from 'swr'
import { fetcher } from 'app/lib/fetcher'

export const usePost = (id: String) => {
  const { data, error, isLoading } = useSWR(
    `https://mockend.com/mockend/demo/posts/${id}`,
    fetcher
  )

  return {
    post: data,
    isLoading,
    isError: error,
  }
}
