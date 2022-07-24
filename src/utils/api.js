import axios from 'axios'

let token = ''
const user = JSON.parse(localStorage.getItem('authUser'))
if (user && user !== 'undefined') {
  token = user.token
}
const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default api
