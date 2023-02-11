import useSWR from 'swr'
import { fetcher } from 'app/lib/fetcher'
import { api } from 'app/config/api'

/** @todo - move base urls to env later */
const { WP_BASE_URL } = api

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(`${WP_BASE_URL}/posts`, fetcher)

  return {
    posts: data,
    isLoading,
    isError: error,
  }
}
