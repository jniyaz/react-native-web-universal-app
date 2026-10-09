export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Mobile; React Native)',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }
      return res.json()
    })
    .catch((err) => {
      console.error('API fetch error for URL:', url, err)
      throw err
    })
