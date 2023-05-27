import axios from 'axios'
import {useEffect, useState} from 'react'

function coin() {

    const [coin, setCoin] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en')
    })

  return (
    <div>coin</div>
  )
}

export default coin