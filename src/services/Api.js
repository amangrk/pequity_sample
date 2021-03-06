import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.punkapi.com/v2/`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
