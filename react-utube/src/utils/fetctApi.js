import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = { 
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '320f6d99f8msh82f76d14587ad7cp1942c8jsn55a8db59b102',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}