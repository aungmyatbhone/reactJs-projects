import { createApi, CreateApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '320f6d99f8msh82f76d14587ad7cp1942c8jsn55a8db59b102',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl =  'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url, headers:cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNewsApi: builder.query({
            query: ({count,newsCategory}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&fresheness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsApiQuery} = cryptoNewsApi
