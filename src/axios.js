import axios from 'axios';

const instance = axios.create({
   // baseURL: 'https://facebook-mern-app.herokuapp.com'
   baseURL: 'http://localhost:9000'
})

export default instance

//axios.post('/upload/image');