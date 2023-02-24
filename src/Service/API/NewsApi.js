const key = 'ff7c02949fab423eb9e124f50daaa3cd'

export const getTopHeadlines = async (country) => {
    const endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`

    try {
        const data = await (await fetch(endpoint)).json()
        return data
    } catch (error) {
        return error
    }
}