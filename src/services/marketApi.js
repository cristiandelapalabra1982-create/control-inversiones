const API_KEY =
  import.meta.env.VITE_FINNHUB_API_KEY

export async function getQuote(symbol) {

  try {

    const response = await fetch(

      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`

    )

    const data = await response.json()

    return {
      price: data.c,
      change: data.dp
    }

  } catch (error) {

    console.log(error)

    return {
      price: 0,
      change: 0
    }
  }
}