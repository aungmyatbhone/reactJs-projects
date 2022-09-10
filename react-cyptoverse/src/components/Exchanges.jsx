import React from 'react'


import { useGetExchangesQuery } from '../services/cryptoApi'
const Exchanges = () => {
    const {data, isFetcing} = useGetExchangesQuery()
    console.log(data?.data)

    if(isFetcing) return <h1>Loading...</h1>
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges