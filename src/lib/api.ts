import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: '6480392eb96f14ac8d8af758e359b992',
  },
})
