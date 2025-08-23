const apiUrl = import.meta.env.VITE_API_URL

export async function useListMatches() {
  try {
    const response = await fetch(`${apiUrl}/list-matches/all-matches`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok)
      throw new Error(`${response.statusText} ${response.statusText}`)

    return response.json()
  } catch (e) {
    console.error('Error:', e)
  }
}
