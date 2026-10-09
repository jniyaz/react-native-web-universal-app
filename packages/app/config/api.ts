export const api = {
  WP_BASE_URL:
    process.env.NEXT_PUBLIC_WP_BASE_URL ||
    process.env.EXPO_PUBLIC_WP_BASE_URL ||
    'https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com',
}
