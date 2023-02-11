import useSWR from 'swr'
import { fetcher } from 'app/lib/fetcher'
import { api } from 'app/config/api'

/** @todo - move base urls to env later */
const { WP_BASE_URL } = api

export const usePost = (id: String) => {
  const { data, error, isLoading } = useSWR(
    `${WP_BASE_URL}/posts/${id}`,
    fetcher
  )

  return {
    post: data,
    isLoading,
    isError: error,
  }
}
