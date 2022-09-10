import { create } from '@mui/material/styles/createTransitions'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
   'X-RapidAPI-Key': '320f6d99f8msh82f76d14587ad7cp1942c8jsn55a8db59b102',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
 
const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({ 
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
}) 

export const {useGetCryptosQuery, useGetCryptoDetailQuery, useGetCryptoHistoryQuery, useGetExchangesQuery} = cryptoApi