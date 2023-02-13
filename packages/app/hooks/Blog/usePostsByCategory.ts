import useSWR from 'swr'
import { fetcher } from 'app/lib/fetcher'
import { api } from 'app/config/api'

/** @todo - move base urls to env later */
const { WP_BASE_URL } = api

export const usePostsByCategory = (id: any, size: number) => {
  id = id ?? '457'
  size = size ?? 10
  const { data, error, isLoading } = useSWR(
    `${WP_BASE_URL}/posts?categories=${id}&per_page=${size}`,
    fetcher
  )

  return {
    posts: data,
    isLoading,
    isError: error,
  }
}
